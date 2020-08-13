from rest_framework import serializers

from apps.users.models import User
from .models import Cliente


class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = (
            'id', 'username', 'is_active', 'password', 
            'nombre', 'apellido', 'dni', 'celular', 'direccion',
            'correo',
        )
        read_only_fields = ('username',)
        extra_kwargs = {
            'password': {'write_only': True, 'required': False}
        }
    
    def create(self, validated_data, *args, **kwargs):
        cliente = Cliente()
        cliente.set_password(validated_data.get('password'))
        validated_data['password'] = cliente.password
        validated_data['username'] = validated_data['dni']
        return super(ClienteSerializer, self).create(validated_data, *args, **kwargs)

    def update(self, instance, validated_data, *args, **kwargs):
        password = validated_data.get('password', None)
        if password:
            cliente = Cliente()
            cliente.set_password(password)
            validated_data['password'] = cliente.password
            validated_data['username'] = validated_data['dni']

        return super(ClienteSerializer, self).update(instance, validated_data, *args, **kwargs)

    def validate(self, data):
        if User.objects.filter(username=data.get('dni')).first():
            raise serializers.ValidationError({'dni': 'Se encuentra registrado'})
        return data