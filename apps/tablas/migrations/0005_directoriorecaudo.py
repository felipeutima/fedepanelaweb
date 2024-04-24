# Generated by Django 3.2.16 on 2024-04-05 16:25

import apps.tablas.models
from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('tablas', '0004_directorioareatecnica'),
    ]

    operations = [
        migrations.CreateModel(
            name='DirectorioRecaudo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=255, null=True)),
                ('archivo', models.FileField(upload_to=apps.tablas.models.docs_directory)),
                ('published', models.DateTimeField(default=django.utils.timezone.now)),
            ],
            options={
                'ordering': ('-published',),
            },
        ),
    ]