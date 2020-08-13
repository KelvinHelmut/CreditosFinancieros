from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import Group

from rest_framework import views
from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from rest_framework import authentication

from .serializers import UserSerializer, UserLoginSerializer, UserChangePasswordSerializer
from .models import User

class NoAuthentication(authentication.BaseAuthentication):
    def authenticate(self, request):
        user = User()
        return (user, None)

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserChangePasswordViewSet(viewsets.ViewSet):
    def update(self, request, pk):
        user = User.objects.get(pk=pk)
        serializer = UserChangePasswordSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        if not user.check_password(serializer.data.get('old_password')):
            return Response(
                data={'detail': ['Contraseña incorrecta.']},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        user.set_password(serializer.data.get('new_password'))
        user.save()
        
        return Response(status=status.HTTP_204_NO_CONTENT)


class UserLoginViewset(viewsets.ViewSet):
    authentication_classes = [NoAuthentication,]
    
    def create(self, request):
        errors = []

        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.data
        user = authenticate(username=data.get('username'), password=data.get('password'))

        if user is None:
            errors.append('Usuario y/o contraseña incorrectos.')
        elif user.is_active:
            login(self.request, user)            
        else:
            errors.append('Usuario inactivo.')

        if len(errors) == 0:
            return Response({
                "user": {
                    "id": user.id,
                    "username": user.username,
                },
            })
        else:
            return Response(
                data={ "detail": '. '.join(errors) },
                status=status.HTTP_400_BAD_REQUEST
            )


class UserLogoutViewset(viewsets.ViewSet):
    def create(self, request):
        logout(self.request)

        return Response(status=status.HTTP_204_NO_CONTENT)


class SessionViewSet(viewsets.ViewSet):
    def list(self, request):
        user = request.user

        return Response({
            "user": {
                "id": user.id,
                "username": user.username,
            },
        })