# Generated by Django 4.1.4 on 2022-12-23 02:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('DLS', '0004_rename_password_user_passworddigest'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='passwordDigest',
            new_name='password',
        ),
    ]
