from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import Programas
from rest_framework import permissions
from .serializers import *



class ListProgramasView(APIView):
    permission_classes = (permissions.AllowAny,)
    
    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset()

    def get(self, request, format=None):

        programas = Programas.objects.all()
                    
        
        # Serializar los programas
        serializer = PostSerializer(programas, many=True)
            
        return Response({'programas': serializer.data})


