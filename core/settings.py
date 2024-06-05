
from pathlib import Path

import os 
import environ
from datetime import timedelta
env = environ.Env()
environ.Env.read_env()

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get("SECRET_KEY")

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = os.environ.get("DEBUG")

ALLOWED_HOSTS = env.list('ALLOWED_HOSTS_DEV')

# Application definition

DJANGO_APPS = [
    'jazzmin',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

PROJECT_APPS=[
    "apps.news",
    "apps.category",
    "apps.boletines",
    "apps.tablas",
    "apps.programas",
    "apps.conexionp",
    "apps.slides",
    "apps.events"

]

THIRD_PARTY_APPS=[
    'corsheaders',
    'rest_framework',
    'ckeditor',
    'ckeditor_uploader',
    'djoser',
    'social_django',
    'rest_framework_simplejwt',
    'rest_framework_simplejwt.token_blacklist',
    'storages'
    
]

INSTALLED_APPS=DJANGO_APPS+PROJECT_APPS+THIRD_PARTY_APPS


CKEDITOR_CONFIGS = {

    'default': {
        'toolbar': 'full',
        'autoParagraph': False,
        'filebrowserBrowseUrl': '/ckeditor/browse/',
    }
}

CKEDITOR_UPLOAD_PATH = os.path.join(BASE_DIR, 'media')



MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'core.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'build')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'core.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'fedepane_nueva',
        'USER': 'fedepane_db',
        'PASSWORD': 'F3(FIeQ02&bW',
        'HOST': '190.90.160.5',  # O la dirección IP del servidor de la base de datos
        'PORT': '3306',        # Puerto de la base de datos
    }
}
DATABASES["default"]["ATOMIC_REQUESTS"]=False


# Password validation
# https://docs.djangoproject.com/en/3.2/ref/settings/#auth-password-validators

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


# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = 'es'

TIME_ZONE = 'America/Lima'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.2/howto/static-files/

STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATIC_URL = '/static/'

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'build/static')
]

# Default primary key field type
# https://docs.djangoproject.com/en/3.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny'
        #'rest_framework.authentication.TokenAuthentication',
        #'rest_framework.permissions.IsAuthenticatedOrReadOnly'
    ],
        'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
}


CORS_ORIGIN_WHITELIST = [
    'http://localhost:3000',
    'http://localhost:8000',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:8000',
    'https://fedepanela.org.co',
]
EMAIL_BACKEND='django.core.mail.backends.console.EmailBackend'


if not DEBUG:
    DATABASES = {
      'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'fedepane_nueva',
        'USER': 'fedepane_db',
        'PASSWORD': 'F3(FIeQ02&bW',
        'HOST': '190.90.160.5',  # O la dirección IP del servidor de la base de datos
        'PORT': '3306',        # Puerto de la base de datos
     }
    }
    #STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

    AWS_ACCESS_KEY_ID=env(' ')
    AWS_SECRET_ACCESS_KEY=env('AWS_SECRET_ACCESS_KEY')
    AWS_STORAGE_BUCKET_NAME=env('AWS_STORAGE_BUCKET_NAME')

    AWS_S3_CUSTOM_DOMAIN=f'{AWS_STORAGE_BUCKET_NAME}.s3.amazonaws.com'
    AWS_S3_OBJECT_PARAMETERS ={'CacheControl':'max-age=86400'}
    AWS_DEFAULT_ACL='public-read'
    
    STATIC_LOCATION= 'static'
    STATIC_URL=f'https://{AWS_S3_CUSTOM_DOMAIN}/{STATIC_LOCATION}/'
    STATICFILES_STORAGE='storages.backends.s3boto3.S3Boto3Storage'

    PUBLIC_MEDIA_LOCATION='media'
    MEDIA_URL=f'https://{AWS_S3_CUSTOM_DOMAIN}/{PUBLIC_MEDIA_LOCATION}/'
    DEFAULT_FILE_STORAGE='core.storage_backends.MediaStore'

    STATICFILES_DIRS=(os.path.join(BASE_DIR, 'build/static'),)
    STATIC_ROOT=(os.path.join(BASE_DIR, 'static'))

    
