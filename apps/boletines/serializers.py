from rest_framework import serializers
from .models import *

class PostSerializer(serializers.ModelSerializer):

    class Meta: 
        model=Boletin
        fields="__all__"


class PricesSerializer(serializers.ModelSerializer):

    class Meta: 
        model=BoletinPrecios
        fields="__all__"


