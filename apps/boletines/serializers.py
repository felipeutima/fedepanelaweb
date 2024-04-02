from rest_framework import serializers
from .models import *

class PostSerializer(serializers.ModelSerializer):

    class Meta: 
        model=Boletin
        fields="__all__"


