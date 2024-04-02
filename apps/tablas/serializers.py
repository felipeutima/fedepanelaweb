from rest_framework import serializers
from .models import *


class PostListSerializer(serializers.ModelSerializer):
    class Meta: 
        model=DirectorioExcel
        fields="__all__"