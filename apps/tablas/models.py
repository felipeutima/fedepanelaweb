from django.db import models
from django.utils import timezone


def docs_directory(instance, filename):
    return 'docs/{0}/{1}'.format(instance.title, filename)

class DirectorioCentral(models.Model):
    class Meta:
        verbose_name = 'Directorio Central'
        verbose_name_plural = 'Directorio Central'
    title =  models.CharField(max_length=255, blank=True, null=True)
    archivo = models.FileField(upload_to=docs_directory)
    published =models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.title

class DirectorioAreaTecnica(models.Model):
    class Meta:
        verbose_name = 'Directorio Área Técnica'
        verbose_name_plural = 'Directorio de Área Técnica'
    title =  models.CharField(max_length=255, blank=True, null=True)
    archivo = models.FileField(upload_to=docs_directory)
    published =models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.title
class DirectorioRecaudo(models.Model):
    class Meta:
        verbose_name = 'Directorio Recaudo'
        verbose_name_plural = 'Directorio de Recaudo'
    title =  models.CharField(max_length=255, blank=True, null=True)
    archivo = models.FileField(upload_to=docs_directory)
    published =models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.title

