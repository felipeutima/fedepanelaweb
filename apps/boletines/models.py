from django.db import models
def boletines_thumbnail_directory(instance, filename):
    return 'boletines/{0}/{1}'.format(instance.titulo, filename)


class Boletin(models.Model):
    class Meta:
        verbose_name = 'Boletin'
        verbose_name_plural = 'Boletines'

    CATEGORIA_CHOICES = [
        ('tendencias', 'Tendencias'),
        ('news', 'News'),
        ('precios', 'Precios'),
     
    ]
    titulo=models.CharField(max_length=255, blank=True, null=True)
    url = models.URLField(max_length=200)
    thumbnail = models.ImageField(upload_to=boletines_thumbnail_directory, max_length=500, blank=True, null=True)
    fecha = models.DateField(auto_now_add=True)
    categoria = models.CharField(max_length=20, choices=CATEGORIA_CHOICES, default='news')  # Agrega este campo para la categoría

    def __str__(self):
        return self.titulo