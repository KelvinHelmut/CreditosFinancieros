# Generated by Django 2.2 on 2020-08-14 15:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('trabajadores', '0004_trabajador'),
        ('creditos', '0004_auto_20200813_1915'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='credito',
            options={'ordering': ('-id',), 'verbose_name': 'Credito', 'verbose_name_plural': 'Creditos'},
        ),
        migrations.AddField(
            model_name='credito',
            name='responsable',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='trabajadores.Trabajador'),
        ),
    ]