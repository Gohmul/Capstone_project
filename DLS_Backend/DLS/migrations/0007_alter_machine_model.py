# Generated by Django 4.1.4 on 2022-12-30 23:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DLS', '0006_alter_machine_make_alter_machine_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='machine',
            name='model',
            field=models.CharField(max_length=100),
        ),
    ]
