# Generated by Django 2.2 on 2020-08-14 00:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('clientes', '0002_auto_20200813_1434'),
    ]

    operations = [
        migrations.CreateModel(
            name='Credito',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('estado', models.IntegerField(choices=[('SOLICITADO', 0), ('APROBADO', 1), ('RECHAZADO', -1)])),
                ('monto', models.DecimalField(decimal_places=2, max_digits=7)),
                ('deuda_sbs', models.DecimalField(decimal_places=2, max_digits=10)),
                ('calificacion_sentinel', models.IntegerField(choices=[('SOLICITADO', 0), ('APROBADO', 1), ('RECHAZADO', -1)])),
                ('prediccion_ia', models.DecimalField(decimal_places=2, max_digits=4)),
                ('creado', models.DateTimeField(auto_now_add=True)),
                ('actualizado', models.DateTimeField(auto_now=True)),
                ('cliente', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='clientes.Cliente')),
            ],
            options={
                'verbose_name': 'Credito',
                'verbose_name_plural': 'Creditos',
            },
        ),
    ]