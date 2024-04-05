from django.db import models
import uuid



# Create your models here.
class Category(models.Model):
    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
    
    name = models.CharField(max_length=255, unique=True)
    slug =models.SlugField(max_length=255, unique=True, default=uuid.uuid4)


    def __str__(self):
        return self.name

