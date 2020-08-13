from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

class UserManager(BaseUserManager, models.Manager):
    def _create_user(self, username, password, is_staff, is_superuser, **extra_fields):
        user = self.model(username = username, is_superuser = is_superuser, is_staff = is_staff, **extra_fields)
        user.set_password(password)
        user.save(using = self._db)
        return user

    def create_user(self, username, password = None, **extra_fields):
        return self._create_user(username, password, True, False, **extra_fields)

    def create_superuser(self, username, password = None, **extra_fields):
        return self._create_user(username, password, True, True, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length = 30, unique = True)
    # avatar = models.ImageField(upload_to = 'users', null = True, blank = True)
    is_active = models.BooleanField(default = True)
    is_staff = models.BooleanField(default = False)

    objects = UserManager()

    USERNAME_FIELD = 'username'
    # REQUIRED_FIELDS = []

    def get_short_name(self):
        return self.username