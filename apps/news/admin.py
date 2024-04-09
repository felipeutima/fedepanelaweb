from django.contrib import admin

# Register your models here.
from .models import *
from .forms import *


class ImgAdmin (admin.TabularInline):
    model=ImgMultimedia

class MultimediaAdmin (admin.ModelAdmin):
    inlines=[
        ImgAdmin
    ]

admin.site.register(Post)
admin.site.register(Multimedia, MultimediaAdmin)

