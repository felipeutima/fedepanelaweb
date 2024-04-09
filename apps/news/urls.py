from django.urls import path
from .views import *

APP_NAME= "news"

urlpatterns=[
    path('create',CreateNewPostView.as_view()),
    path('list',NewsListView.as_view()), 
    path('listHome',NewsHomeView.as_view()), 
    path('detail/<slug>',NewsDetailView.as_view()),
    path('filter',SearchNewsView.as_view()),
    #path('publish',PublishBlogPostView.as_view()),
    #path('delete/<slug>',DeleteBlogPostView.as_view()),
    #path('edit',EditBlogPostView.as_view()),
    #path('draft',DraftBlogPostView.as_view()),
    
]