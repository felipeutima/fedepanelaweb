from django.db import models
def slides_thumbnail_directory(instance, filename):
    return 'slides/{0}/{1}'.format(instance.titulo, filename)


class Slides(models.Model):
    class Meta:
        verbose_name = 'slide'
        verbose_name_plural = 'slides'


    titulo=models.CharField(max_length=255, blank=True, null=True)
    url = models.URLField(max_length=200, blank=True, null=True)
    thumbnail = models.ImageField(upload_to=slides_thumbnail_directory, max_length=500, blank=True, null=True)


    def __str__(self):
        return self.titulo