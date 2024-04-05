from rest_framework import serializers
from .models import *

class PostSerializer(serializers.ModelSerializer):

    class Meta: 
        model=Programas
        fields="__all__"


