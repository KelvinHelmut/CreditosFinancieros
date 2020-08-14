from rest_framework import viewsets

from .serializers import CreditoSerializer
from .models import Credito


class CreditoViewSet(viewsets.ModelViewSet):
    queryset = Credito.objects.all()
    serializer_class = CreditoSerializer