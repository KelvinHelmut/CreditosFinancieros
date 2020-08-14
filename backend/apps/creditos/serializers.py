from rest_framework import serializers

from .models import Credito


class CreditoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Credito
        fields = (
            'id', 'cliente', 'estado', 'monto', 'deuda_sbs',
            'calificacion_sentinel', 'prediccion_ia',
            'creado', 'actualizado'
        )
        read_only_fields = (
            'creado', 'actualizado', 'deuda_sbs',
            'calificacion_sentinel', 'prediccion_ia'
        )