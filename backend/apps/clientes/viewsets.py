from rest_framework import viewsets
from rest_framework.authentication import BaseAuthentication

from apps.users.models import User
from .serializers import ClienteSerializer
from .models import Cliente


class NoAuthentication(BaseAuthentication):
    def authenticate(self, request):
        user = User()
        return (user, None)


class ClienteViewSet(viewsets.ModelViewSet):
    authentication_classes = [NoAuthentication,]
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer