from django.shortcuts import render
from rest_framework.views import APIView
from .models import DirectorioExcel
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser


# Create your views here.
from rest_framework import status
from rest_framework import permissions
from .serializers import PostListSerializer



class DirectorioView(APIView):
    

    def get(self, request, format=None):
        if DirectorioExcel.objects.exists():
            directorio = DirectorioExcel.objects.first()
            serializer = PostListSerializer(directorio)
            return Response({'directorio': serializer.data})
        else:
            return Response({'error':'No directorio found'}, status=status.HTTP_404_NOT_FOUND)


