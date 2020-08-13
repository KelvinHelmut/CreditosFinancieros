from django.urls import path, include

from rest_framework import routers

from apps.users.viewsets import *

app_name = 'api'

router = routers.DefaultRouter()
router.register('users/login', UserLoginViewset, basename='login')
router.register('users/logout', UserLogoutViewset, basename='logout')
router.register('users/password', UserChangePasswordViewSet, basename='password')
router.register('users/session', SessionViewSet, basename='session')
router.register('users', UserViewSet)

urlpatterns = router.urls