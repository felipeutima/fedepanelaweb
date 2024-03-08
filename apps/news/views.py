from django.shortcuts import render
from rest_framework.views import APIView
from .models import Post
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from slugify import slugify
from .pagination import SmallSetPagination, MediumSetPagination, LargeSetPagination
# Create your views here.
from .permissions import IsPostAuthorOrReadOnly,AuthorPermission
from rest_framework import status
from rest_framework import permissions
from .serializers import PostSerializer, PostListSerializer

class CreateNewPostView(APIView):
    permission_classes = (AuthorPermission, )
    def post(self, request, format=None):
        user = self.request.user
        Post.objects.create(author=user)

        return Response({'success': 'Post edited'})

class DeleteNewPostView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly, )
    def delete(self, request, slug, format=None):
        
        post = Post.objects.get(slug=slug)

        post.delete()

        return Response({'success': 'Post Deleted'})
    
class PublishNewPostView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly, )
    def put(self, request, format=None):
        data = self.request.data
        slug = data['slug']

        post = Post.objects.get(slug=slug)

        post.status = 'published'
        post.save()

        return Response({'success': 'Post published'})
    
class DraftNewPostView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly, )
    def put(self, request, format=None):
        data = self.request.data
        slug = data['slug']

        post = Post.objects.get(slug=slug)

        post.status = 'draft'
        post.save()

        return Response({'success': 'Post edited'})
    
class EditNewPostView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly, )
    parser_classes = [MultiPartParser, FormParser]

    def put(self, request, format=None):
        user = self.request.user

        data = self.request.data
        slug = data['slug']

        print(data)
        
        post = Post.objects.get(slug=slug)

        if(data['title']):
            if not (data['title'] == 'undefined'):
                post.title = data['title']
                post.save()
        if(data['new_slug']):
            if not (data['new_slug'] == 'undefined'):
                post.slug = slugify(data['new_slug'])
                post.save()
        if(data['description']):
            if not (data['description'] == 'undefined'):
                post.description = data['description']
                post.save()
        if(data['time_read']):
            if not (data['time_read'] == 'undefined'):
                post.time_read = data['time_read']
                post.save()
        if(data['content']):
            if not (data['content'] == 'undefined'):
                post.content = data['content']
                post.save()


        if(data['thumbnail']):
            if not (data['thumbnail'] == 'undefined'):
                post.thumbnail = data['thumbnail']
                post.save()

        return Response({'success': 'Post edited'})


class NewsListView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, format=None):
        if Post.postobjects.all().exists():

            posts = Post.postobjects.all()
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = PostListSerializer(results, many=True)

            return paginator.get_paginated_response({'posts': serializer.data})
        else:
            return Response({'error':'No posts found'}, status=status.HTTP_404_NOT_FOUND)