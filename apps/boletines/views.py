from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import Boletin
from rest_framework import permissions
from .serializers import *


class ListTendenciasView(APIView):
    permission_classes = (permissions.AllowAny,)
    
    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset()

    def get(self, request, format=None):

        boletines = Boletin.objects.all().order_by('-fecha').filter(categoria="tendencias")
                    
        
        # Serializar los boletines
        serializer = PostSerializer(boletines, many=True)
            
        return Response({'tendencias': serializer.data})

class ListNewsView(APIView):
    permission_classes = (permissions.AllowAny,)
    
    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset()

    def get(self, request, format=None):

        boletines = Boletin.objects.all().order_by('-fecha').filter(categoria="news")
                    
        
        # Serializar los boletines
        serializer = PostSerializer(boletines, many=True)
            
        return Response({'news': serializer.data})

class ListPreciosView(APIView):
    permission_classes = (permissions.AllowAny,)
    
    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset()

    def get(self, request, format=None):

        boletines = Boletin.objects.all().order_by('-fecha').filter(categoria="precios")
                    
        
        # Serializar los boletines
        serializer = PostSerializer(boletines, many=True)
            
        return Response({'precios': serializer.data})


class ListBoletinFirst(APIView):
    permission_classes = (permissions.AllowAny,)
    
    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset()

    def get(self, request, format=None):
        # Obtener los últimos boletines de cada categoría
        latest_tenencias_boletin = Boletin.objects.filter(categoria="tendencias").order_by('-fecha').first()
        latest_news_boletin = Boletin.objects.filter(categoria="news").order_by('-fecha').first()
        latest_precios_boletin = Boletin.objects.filter(categoria="precios").order_by('-fecha').first()

        # Crear una lista con los boletines, excluyendo los que son None
        latest_boletines = [boletin for boletin in [latest_tenencias_boletin, latest_news_boletin] if boletin is not None]

        # Serializar los boletines
        serializer = PostSerializer(latest_boletines, many=True)

        return Response({'boletines': serializer.data}, status=status.HTTP_200_OK)
  