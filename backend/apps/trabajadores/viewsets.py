from rest_framework import viewsets

from .serializers import TrabajadorSerializer
from .models import Trabajador


class TrabajadorViewSet(viewsets.ModelViewSet):
    queryset = Trabajador.objects.all()
    serializer_class = TrabajadorSerializer