# Generated by Django 4.1.4 on 2022-12-22 20:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('DLS', '0002_alter_location_zipcode'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='passwordDigest',
            new_name='password',
        ),
    ]