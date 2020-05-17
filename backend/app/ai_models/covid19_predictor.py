import numpy as np
import joblib 

class labtest_predictor:
    """
        To be commented    
    """
    #Class variables
    model_variables = ['Idade', 'Plaquetas', 'VMP', 'Hemácias', 'Linfócitos', 'CHCM', 'Leucócitos', 
                        'Basófilos', 'Eosinófilos', 'VCM', 'Monócitos', 'RDW', 'Outra gripe']
    norm = {
            'rdw': {'avg': 13.65, 'std':0.85},
            'vmp': {'avg': 10, 'std':1},
            'vcm': {'avg': 90.9, 'std':4.85},
            'chcm': {'avg': 32.5, 'std':1},
            'hemacias': {'avg': 4.8, 'std':0.4},
            'plaquetas': {'avg': 226650, 'std':2661},
            'linfocitos': {'avg': 2075, 'std':672},
            'basofilos': {'avg': 30, 'std':19},
            'leucocitos': {'avg': 6284, 'std':1746},
            'eosinofilos': {'avg': 234, 'std':190},
            'monocitos': {'avg': 385, 'std':187}
            }

    classifier = joblib.load('app/ai_models/classificador_lucas.pkl') #load only once

    #End of class variables

    def __init__(self, patient_dict):
        self.patient_dict = patient_dict    

    def preprocessing(self):
        #Data normalization (accordclearing to brazilian population)
        
        idade_quantile = int(np.floor(self.patient_dict['age']))
        rdw_norm = self.normalizer(float(self.patient_dict['cbc']['rdw']),self.norm, 'rdw')
        vmp_norm = self.normalizer(float(self.patient_dict['cbc']['vmp']),self.norm, 'vmp')
        plaquetas_norm = self.normalizer(float(self.patient_dict['cbc']['plaquetas']),self.norm, 'plaquetas')
        chcm_norm = self.normalizer(float(self.patient_dict['cbc']['chcm']),self.norm, 'chcm')
        vcm_norm = self.normalizer(float(self.patient_dict['cbc']['vcm']),self.norm, 'vcm')
        hemacias_norm = self.normalizer(float(self.patient_dict['cbc']['hemacias']),self.norm, 'hemacias')
        linfocitos_norm = self.normalizer(float(self.patient_dict['cbc']['linfocitos']),self.norm, 'linfocitos')
        basofilos_norm = self.normalizer(float(self.patient_dict['cbc']['basofilos']),self.norm, 'basofilos')
        leucocitos_norm = self.normalizer(float(self.patient_dict['cbc']['leucocitos']),self.norm, 'leucocitos')
        eosinofilos_norm = self.normalizer(float(self.patient_dict['cbc']['eosinofilos']),self.norm, 'eosinofilos')
        monocitos_norm = self.normalizer(float(self.patient_dict['cbc']['monocitos']),self.norm, 'monocitos')

        #Is the patient diagnosed with any respiratory infection? (has_disease)
        has_disease = int(any([result==1 for result in self.patient_dict['respiratory_infections'].values()]))

        patient_preprocessed = {
            'Idade': idade_quantile,
            'Plaquetas': plaquetas_norm,
            'VMP': vmp_norm,
            'Hemácias': hemacias_norm,
            'Linfócitos': linfocitos_norm,
            'CHCM': chcm_norm,
            'Leucócitos': leucocitos_norm,
            'Basófilos': basofilos_norm,
            'Eosinófilos': eosinofilos_norm,
            'VCM': vcm_norm,
            'Monócitos': monocitos_norm,
            'RDW': rdw_norm,
            'Outra gripe': has_disease
        }
        return patient_preprocessed

    def predict(self, patient_preprocessed):
        patient_vars_model = []
        for var in self.model_variables:
            patient_vars_model.append(patient_preprocessed[var])
            
        pred = self.classifier.predict_proba(np.array([patient_vars_model]))[0]
        pred_class = int(np.argmax(pred))
        pred_proba = float(np.max(pred))
        return {'pred_class': pred_class, 'pred_proba': pred_proba}

    def model_interpretation(self, patient_id, patient_preprocessed, pred, prob, model):
        #patient_data [id]
        shap_img = "temp/shap-15698946516192161984.png"
        dist_img = "temp/dist-15698946516192161984.png"
        probacurve = "temp/probacurve-15698946516192161984.png"

        model_result = {
            'prediction': pred,
            'probability': "0.83",
            'shap_img': shap_img,
            'dist_img': dist_img,
            'probacurve': probacurve
        }

        return model_result

    """
    Helper functions go here
    """
    def normalizer(self, value, norm_dict, norm_key):
        return (value -  norm_dict[norm_key]['avg'])/norm_dict[norm_key]['std']

    