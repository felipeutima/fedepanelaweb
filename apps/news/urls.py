from django.urls import path
from .views import *

urlpatterns=[
    path('create',CreateNewPostView.as_view()),
    path('list',NewsListView.as_view()), 
    #path('publish',PublishBlogPostView.as_view()),
    #path('delete/<slug>',DeleteBlogPostView.as_view()),
    #path('edit',EditBlogPostView.as_view()),
    #path('draft',DraftBlogPostView.as_view()),
    
]