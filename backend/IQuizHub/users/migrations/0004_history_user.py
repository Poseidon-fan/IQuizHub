# Generated by Django 5.0.7 on 2024-07-22 00:37

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_history'),
    ]

    operations = [
        migrations.AddField(
            model_name='history',
            name='user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='用户'),
            preserve_default=False,
        ),
    ]
