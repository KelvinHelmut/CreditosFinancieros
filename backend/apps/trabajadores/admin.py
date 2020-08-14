from django.contrib import admin

from .models import Trabajador

@admin.register(Trabajador)
class TrabajadorAdmin(admin.ModelAdmin):
    fields = (
        'nombre', 'apellido', 'dni', 'celular', 'direccion', 'correo',
        'username', 'password', 'is_active'
    )

    def save_model(self, request, obj, form, change):
        if obj.pk:
            trabajador = Trabajador.objects.get(pk=obj.pk)
            if trabajador.password != obj.password:
                obj.set_password(obj.password)
        else:
            obj.set_password(obj.password)
        obj.is_staff = True
        super().save_model(request, obj, form, change)