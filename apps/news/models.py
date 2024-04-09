from django.db import models
from django.utils import timezone
import uuid
from django.conf import settings
User = settings.AUTH_USER_MODEL
from ckeditor.fields import RichTextField
# Create your models here.
from apps.category.models import Category


def news_thumbnail_directory(instance, filename):
    return 'news/{0}/{1}'.format(instance.title, filename)



class Post(models.Model):
    class Meta:
        verbose_name = 'Noticia'
        verbose_name_plural = 'Noticias'


    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')

    options = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )

    title =         models.CharField(max_length=255, blank=True, null=True)
    slug =          models.SlugField(max_length=255, unique=True, default=uuid.uuid4)
    thumbnail =     models.ImageField(upload_to=news_thumbnail_directory, max_length=500, blank=True, null=True)

    author =        models.ForeignKey(User, on_delete=models.CASCADE)
    
    content =       RichTextField()
  

    category =      models.ForeignKey(Category, on_delete=models.PROTECT)

    published =     models.DateTimeField(default=timezone.now)

    status =        models.CharField(max_length=10, choices=options, default='draft')

    objects =           models.Manager()  # default manager
    postobjects =       PostObjects()  # custom manager
    attachments = models.FileField(upload_to=news_thumbnail_directory, max_length=500, blank=True, null=True)

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.title


    def get_status(self):
        status = self.status
        return status

class Multimedia(models.Model):

    title=models.CharField(max_length=255, blank=True, null=True)
    image = models.ImageField(upload_to=news_thumbnail_directory, max_length=500,  null=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)

    def __str__(self):
        return self.title
    
class ImgMultimedia(models.Model):
    title=models.CharField(max_length=255, blank=True, null=True)
    image = models.ImageField(upload_to=news_thumbnail_directory, max_length=500,  null=True)
    multimedia=models.ForeignKey(Multimedia, on_delete=models.CASCADE)