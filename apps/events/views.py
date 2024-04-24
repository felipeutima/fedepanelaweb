from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import Event
from rest_framework import permissions
from .serializers import *



class ListEventsView(APIView):
    permission_classes = (permissions.AllowAny,)
    
    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset()

    def get(self, request, format=None):

        conexion = Event.objects.all()
                    
        
        # Serializar los Conexion
        serializer = PostSerializer(conexion, many=True)
            
        return Response({'events': serializer.data})

