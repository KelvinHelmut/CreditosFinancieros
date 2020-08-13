from django.db import models
from apps.users.models import User

class Trabajador(User):
    """Model definition for Trabajador."""

    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    dni = models.CharField(max_length=20)
    celular = models.CharField(max_length=20, null=True, blank=True)
    direccion = models.CharField(max_length=255, null=True, blank=True)
    correo = models.EmailField(max_length=255, null=True, blank=True)

    class Meta:
        """Meta definition for Trabajador."""

        verbose_name = 'Trabajador'
        verbose_name_plural = 'Trabajadores'

    def __str__(self):
        """Unicode representation of Trabajador."""
        return '{} {}'.format(self.nombre, self.apellido)
