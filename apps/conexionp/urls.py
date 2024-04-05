from django.urls import path

from .views import *

urlpatterns = [
    path('list', ListConexionView.as_view()),

]