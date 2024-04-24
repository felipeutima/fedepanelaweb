from django.db import models


class Event(models.Model):
    class Meta:
        verbose_name = 'Evento'
        verbose_name_plural = 'Eventos'

    title=models.CharField(max_length=255, blank=True, null=True)
    description=models.CharField(max_length=255, blank=True, null=True)
    url = models.URLField(max_length=200)
    date = models.DateTimeField()

    def __str__(self):
        return self.title