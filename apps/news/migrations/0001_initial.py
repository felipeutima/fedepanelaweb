# Generated by Django 3.2.16 on 2024-02-10 01:01

import apps.news.models
import ckeditor.fields
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=255, null=True)),
                ('slug', models.SlugField(default=uuid.uuid4, max_length=255, unique=True)),
                ('thumbnail', models.ImageField(blank=True, max_length=500, null=True, upload_to=apps.news.models.news_thumbnail_directory)),
                ('description', models.TextField(blank=True, max_length=255, null=True)),
                ('content', ckeditor.fields.RichTextField(blank=True, null=True)),
                ('time_read', models.IntegerField(blank=True, null=True)),
                ('published', models.DateTimeField(default=django.utils.timezone.now)),
                ('views', models.IntegerField(blank=True, default=0)),
                ('status', models.CharField(choices=[('draft', 'Draft'), ('published', 'Published')], default='draft', max_length=10)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ('-published',),
            },
        ),
    ]
