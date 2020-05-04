"""Setup for covidhelper package."""
import setuptools
import _version

NAME = "covidhelper"


VERSION = _version.__version__


AUTHOR = 'Rafael'


AUTHOR_EMAIL = ''


DESCRIPTION = 'Help with covid 19'


with open('README.md', 'r') as fh:
    LONG_DESCRIPTION = fh.read()


LICENSE = 'GPL3'


URL = ''


DOWNLOAD_URL = ''


CLASSIFIERS = ['Intended Audience :: Science/Research',
               'Intended Audience :: Developers',
               'License :: OSI Approved :: GPL3 License',
               'Natural Language :: English',
               'Programming Language :: Python',
               'Topic :: Software Development',
               'Topic :: Scientific/Engineering',
               'Operating System :: OS Independent',
               'Programming Language :: Python :: 3.6',
               'Programming Language :: Python :: 3.7']


INSTALL_REQUIRES = [
    'flask', 'flask-wtf', 'flask-login', 'flask-sqlalchemy', 'flask-migrate', 'python-dotenv', 'flask-httpauth', 'flask-cors'
]


EXTRAS_REQUIRE = {
    'code-check': [
        'pylint',
        'mypy'
    ],
    'tests': [
        'pytest',
        'pytest-cov',
    ],
    'docs': [
        'sphinx',
        'sphinx-gallery',
        'sphinx_rtd_theme',
        'numpydoc'
    ]
}


setuptools.setup(
    name=NAME,
    version=VERSION,
    author=AUTHOR,
    author_email=AUTHOR_EMAIL,
    description=DESCRIPTION,
    long_description=LONG_DESCRIPTION,
    long_description_content_type="text/markdown",
    license=LICENSE,
    url=URL,
    download_url=DOWNLOAD_URL,
    packages=setuptools.find_packages(),
    classifiers=CLASSIFIERS,
    install_requires=INSTALL_REQUIRES,
    extras_require=EXTRAS_REQUIRE,
)

package_dir = {'': 'backend'}  # For IDEs like Intellij to recognize the package.

