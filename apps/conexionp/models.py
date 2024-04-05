from django.db import models
def boletines_thumbnail_directory(instance, filename):
    return 'conexion/{0}/{1}'.format(instance.titulo, filename)


class Conexion(models.Model):
    class Meta:
        verbose_name = 'conexion'
        verbose_name_plural = 'conexionp'


    titulo=models.CharField(max_length=255, blank=True, null=True)
    thumbnail = models.ImageField(upload_to=boletines_thumbnail_directory, max_length=500, blank=True, null=True)
    description =   models.TextField(max_length=255, blank=True, null=True)
    tituloBoton=models.CharField(max_length=255, blank=True, null=True)
    url = models.URLField(max_length=200)

    def __str__(self):
        return self.titulo