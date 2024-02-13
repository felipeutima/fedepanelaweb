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
            'description',
            'content',
            'time_read',
            'published',
            'status',
            'get_status'
        ]

class PostListSerializer(serializers.ModelSerializer):
    class Meta: 
        model=Post
        fields=[
            'id',
            'title',
            'slug',
            'thumbnail',
            'description',
            'time_read',
            'published',
            'status'
        ]