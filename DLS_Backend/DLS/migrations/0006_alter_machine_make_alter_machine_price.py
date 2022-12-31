# Generated by Django 4.1.4 on 2022-12-30 23:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DLS', '0005_alter_machine_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='machine',
            name='make',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='machine',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=11),
        ),
    ]