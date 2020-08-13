from rest_framework import serializers

from apps.users.models import User
from .models import Trabajador


class TrabajadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trabajador
        fields = (
            'id', 'username', 'is_active', 'password', 
            'nombre', 'apellido', 'dni', 'celular', 'direccion',
            'correo',
        )
        extra_kwargs = {
            'password': {'write_only': True, 'required': False}
        }
    
    def create(self, validated_data, *args, **kwargs):
        trabajador = Trabajador()
        trabajador.set_password(validated_data.get('password'))
        validated_data['password'] = trabajador.password
        return super(TrabajadorSerializer, self).create(validated_data, *args, **kwargs)

    def update(self, instance, validated_data, *args, **kwargs):
        password = validated_data.get('password', None)
        if password:
            trabajador = Trabajador()
            trabajador.set_password(password)
            validated_data['password'] = trabajador.password

        return super(TrabajadorSerializer, self).update(instance, validated_data, *args, **kwargs)