from django.urls import path

from .views import *

urlpatterns = [
    path('list', ListEventsView.as_view()),

]