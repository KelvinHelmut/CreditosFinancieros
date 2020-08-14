from rest_framework import serializers

from .models import Credito


class CreditoSerializer(serializers.ModelSerializer):
    cliente_txt = serializers.SerializerMethodField()

    class Meta:
        model = Credito
        fields = (
            'id', 'cliente', 'estado', 'monto', 'deuda_sbs',
            'calificacion_sentinel', 'prediccion_ia',
            'creado', 'actualizado', 'cliente_txt',
        )
        read_only_fields = (
            'creado', 'actualizado', 'deuda_sbs',
            'calificacion_sentinel', 'prediccion_ia'
        )

    def get_cliente_txt(self, obj):
        return '{}'.format(str(obj.cliente))