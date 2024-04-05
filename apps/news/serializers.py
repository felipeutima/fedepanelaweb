from rest_framework import serializers
from .models import *

class PostSerializer(serializers.ModelSerializer):
    get_status=serializers.CharField(source='status')
    class Meta: 
        model=Post
        fields=[
            'id',
            'title',
            'slug',
            'thumbnail',
            'content',
            'time_read',
            'published',
            'status',
            'get_status',
            "category"
        ]

class PostListSerializer(serializers.ModelSerializer):
    class Meta: 
        model=Post
        fields=[
            'id',
            'title',
            'slug',
            'thumbnail',
            'time_read',
            'published',
            'status',
            "category"
        ]