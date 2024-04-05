from rest_framework import serializers
from .models import *

class PostSerializer(serializers.ModelSerializer):

    class Meta: 
        model=Conexion
        fields="__all__"


