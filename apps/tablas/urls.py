from django.urls import path
from .views import *

APP_NAME= "tablas"

urlpatterns=[
     path('directorio',DirectorioView.as_view()),

    
]