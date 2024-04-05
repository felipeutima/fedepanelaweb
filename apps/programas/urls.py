from django.urls import path

from .views import *

urlpatterns = [
    path('list', ListProgramasView.as_view()),

]