from django.urls import path, include

from rest_framework import routers
from rest_framework_simplejwt import views as jwt_views

from apps.users.viewsets import *
from apps.clientes.viewsets import *
from apps.trabajadores.viewsets import *
from apps.creditos.viewsets import *

app_name = 'api'

router = routers.DefaultRouter()
router.register('creditos', CreditoViewSet)
router.register('clientes', ClienteViewSet)
router.register('trabajadores', TrabajadorViewSet)
router.register('users/login', UserLoginViewset, basename='login')
router.register('users/logout', UserLogoutViewset, basename='logout')
router.register('users/password', UserChangePasswordViewSet, basename='password')
router.register('users/session', SessionViewSet, basename='session')
router.register('users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]