from django.db import models
def boletines_thumbnail_directory(instance, filename):
    return 'programas/{0}/{1}'.format(instance.titulo, filename)


class Programas(models.Model):
    class Meta:
        verbose_name = 'Programa'
        verbose_name_plural = 'Programas'


    titulo=models.CharField(max_length=255, blank=True, null=True)
    url = models.URLField(max_length=200)
    thumbnail = models.ImageField(upload_to=boletines_thumbnail_directory, max_length=500, blank=True, null=True)


    def __str__(self):
        return self.titulo