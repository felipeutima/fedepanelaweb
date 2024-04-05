from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import Conexion
from rest_framework import permissions
from .serializers import *



class ListConexionView(APIView):
    permission_classes = (permissions.AllowAny,)
    
    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset()

    def get(self, request, format=None):

        conexion = Conexion.objects.all()
                    
        
        # Serializar los Conexion
        serializer = PostSerializer(conexion, many=True)
            
        return Response({'conexion': serializer.data})


