from rest_framework import serializers
from django.contrib.auth.models import Group
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id', 'username', 'is_active', 'password', 
        )
        extra_kwargs = {
            'password': {'write_only': True, 'required': False}
        }
    
    def create(self, validated_data, *args, **kwargs):
        user = User()
        user.set_password(validated_data.get('password'))
        validated_data['password'] = user.password
        return super(UserSerializer, self).create(validated_data, *args, **kwargs)

    def update(self, instance, validated_data, *args, **kwargs):
        password = validated_data.get('password', None)
        if password:
            user = User()
            user.set_password(password)
            validated_data['password'] = user.password

        return super(UserSerializer, self).update(instance, validated_data, *args, **kwargs)


class UserLoginSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    username = serializers.CharField()
    password = serializers.CharField()


class UserChangePasswordSerializer(serializers.Serializer):
    new_password = serializers.CharField()
    old_password = serializers.CharField()