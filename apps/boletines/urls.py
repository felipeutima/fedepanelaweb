from django.urls import path

from .views import *

urlpatterns = [
    path('tendencias', ListTendenciasView.as_view()),
    path('news', ListNewsView.as_view()),
    path('first', ListBoletinFirst.as_view()),
    path('precios', ListPreciosView.as_view())
]