from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser


# Create your views here.
from rest_framework import status
from rest_framework import permissions
from .serializers import PostListSerializer



class DirectorioView(APIView):
    

    def get(self, request, format=None):
        if DirectorioCentral.objects.exists():
            directorio = DirectorioCentral.objects.first()
            serializer = PostListSerializer(directorio)
            return Response({'directorio': serializer.data})
        else:
            return Response({'error':'No directorio found'}, status=status.HTTP_404_NOT_FOUND)


class DirectorioTecnicaView(APIView):
    

    def get(self, request, format=None):
        if DirectorioAreaTecnica.objects.exists():
            directorio = DirectorioAreaTecnica.objects.first()
            serializer = PostListSerializer(directorio)
            return Response({'tecnica': serializer.data})
        else:
            return Response({'error':'No tecnica found'}, status=status.HTTP_404_NOT_FOUND)

class DirectorioRecaudoView(APIView):
    

    def get(self, request, format=None):
        if DirectorioRecaudo.objects.exists():
            directorio = DirectorioRecaudo.objects.first()
            serializer = PostListSerializer(directorio)
            return Response({'recaudo': serializer.data})
        else:
            return Response({'error':'No recaudo found'}, status=status.HTTP_404_NOT_FOUND)


