from django.urls import path

from .views import *

urlpatterns = [
    path('list', ListSlidesView.as_view()),

]