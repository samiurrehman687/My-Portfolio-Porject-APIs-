
from pathlib import Path
import os
from decouple import config

# --------------------------------------------------
# BASE DIRECTORY
# --------------------------------------------------

BASE_DIR = Path(__file__).resolve().parent.parent


# --------------------------------------------------
# SECURITY
# --------------------------------------------------

SECRET_KEY = config('SECRET_KEY')

DEBUG = config('DEBUG', default=False, cast=bool)

ALLOWED_HOSTS = [
    host.strip()
    for host in config('ALLOWED_HOSTS', default='').split(',')
    if host.strip()
]


# --------------------------------------------------
# FRONTEND CONFIGURATION
# --------------------------------------------------

FRONTEND_URL = config('FRONTEND_URL')

CORS_ALLOWED_ORIGINS = [
    FRONTEND_URL,
]


# --------------------------------------------------
# APPLICATION DEFINITION
# --------------------------------------------------

INSTALLED_APPS = [
    'jazzmin',

    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'rest_framework',
    'corsheaders',

    'api.apps.ApiConfig',
]


# --------------------------------------------------
# MIDDLEWARE
# --------------------------------------------------

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',

    'django.contrib.sessions.middleware.SessionMiddleware',

    'corsheaders.middleware.CorsMiddleware',

    'django.middleware.common.CommonMiddleware',

    'django.middleware.csrf.CsrfViewMiddleware',

    'django.contrib.auth.middleware.AuthenticationMiddleware',

    'django.contrib.messages.middleware.MessageMiddleware',

    'django.middleware.clickjacking.XFrameOptionsMiddleware',

    'api.middlewares.UnderConstMiddleware',
]


# --------------------------------------------------
# URL CONFIGURATION
# --------------------------------------------------

ROOT_URLCONF = 'portfolio.urls'


# --------------------------------------------------
# TEMPLATES
# --------------------------------------------------

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',

        'DIRS': [],

        'APP_DIRS': True,

        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]


WSGI_APPLICATION = 'portfolio.wsgi.application'


# --------------------------------------------------
# DATABASE
# --------------------------------------------------

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


# --------------------------------------------------
# PASSWORD VALIDATION
# --------------------------------------------------

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# --------------------------------------------------
# INTERNATIONALIZATION
# --------------------------------------------------

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# --------------------------------------------------
# STATIC FILES
# --------------------------------------------------

STATIC_URL = 'static/'


# --------------------------------------------------
# MEDIA FILES
# --------------------------------------------------

MEDIA_URL = '/media/'

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')


# --------------------------------------------------
# DJANGO REST FRAMEWORK
# --------------------------------------------------

REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
    )
}


# --------------------------------------------------
# BREVO EMAIL CONFIGURATION
# --------------------------------------------------

BREVO_API_KEY = config('BREVO_API_KEY')

BREVO_SENDER_EMAIL = config('BREVO_SENDER_EMAIL')


# --------------------------------------------------
# DEFAULT PRIMARY KEY
# --------------------------------------------------

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
