from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import Slides
from rest_framework import permissions
from .serializers import *



class ListSlidesView(APIView):
    permission_classes = (permissions.AllowAny,)
    
    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset()

    def get(self, request, format=None):

        slides = Slides.objects.all()
                    
        
        # Serializar los Slides
        serializer = PostSerializer(slides, many=True)
            
        return Response({'slides': serializer.data})


