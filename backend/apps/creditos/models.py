from django.db import models

from apps.clientes.models import Cliente
from .functions import get_deuda_sbs, get_calificacion_sentinel, get_prediccion_ia

class Credito(models.Model):
    """Model definition for Credito."""

    ESTADO_SOLICITADO = 0
    ESTADO_APROBADO = 1
    ESTADO_RECHAZADO = -1
    ESTADOS = (
        (ESTADO_SOLICITADO, 'SOLICITADO'),
        (ESTADO_APROBADO, 'APROBADO'),
        (ESTADO_RECHAZADO, 'RECHAZADO')
    )

    PUNTUACION_BUENO = 1
    PUNTUACION_REGULAR = 0
    PUNTUACION_MALO = -1
    PUNTUACIONES = (
        (PUNTUACION_BUENO, 'BUENO'),
        (PUNTUACION_REGULAR, 'REGULAR'),
        (PUNTUACION_MALO, 'MALO')
    )

    cliente = models.ForeignKey(Cliente, on_delete=models.DO_NOTHING)
    estado = models.IntegerField(choices=ESTADOS)
    monto = models.DecimalField(max_digits=7, decimal_places=2)
    deuda_sbs = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    calificacion_sentinel = models.IntegerField(choices=PUNTUACIONES, null=True, blank=True)
    prediccion_ia = models.DecimalField(max_digits=4, decimal_places=2, null=True, blank=True)
    creado = models.DateTimeField(auto_now_add=True)
    actualizado = models.DateTimeField(auto_now=True)

    class Meta:
        """Meta definition for Credito."""

        verbose_name = 'Credito'
        verbose_name_plural = 'Creditos'

    def __str__(self):
        """Unicode representation of Credito."""
        return '{} {}'.format(self.cliente, self.monto)

    def save(self, *args, **kwargs):
        if not self.pk:
            dni = self.cliente.dni
            self.deuda_sbs = get_deuda_sbs(dni)
            self.calificacion_sentinel = get_calificacion_sentinel(dni)
            self.prediccion_ia = get_prediccion_ia(dni)
        super(Credito, self).save(*args, **kwargs)