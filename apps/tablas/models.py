from django.db import models
from django.utils import timezone


def docs_directory(instance, filename):
    return 'docs/{0}/{1}'.format(instance.title, filename)

class DirectorioExcel(models.Model):
    title =  models.CharField(max_length=255, blank=True, null=True)
    archivo = models.FileField(upload_to=docs_directory)
    published =models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.title

