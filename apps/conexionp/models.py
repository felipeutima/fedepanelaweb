from django.db import models
def boletines_thumbnail_directory(instance, filename):
    return 'conexion/{0}/{1}'.format(instance.titulo, filename)


class Conexion(models.Model):


    titulo=models.CharField(max_length=255, blank=True, null=True)
    thumbnail = models.ImageField(upload_to=boletines_thumbnail_directory, max_length=500, blank=True, null=True)
    description =   models.TextField(max_length=255, blank=True, null=True)
    tituloBoton=models.CharField(max_length=255, blank=True, null=True)
    url = models.URLField(max_length=200)
    document = models.FileField(upload_to=boletines_thumbnail_directory, blank=True, null=True)

    def __str__(self):
        return self.titulo
    
    class Meta:
        verbose_name = 'Conexion'
        verbose_name_plural = 'conexion Panelera'
