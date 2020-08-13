from django import forms
from django.contrib.auth.forms import AuthenticationForm

from .models import User

class LoginForm(forms.Form):
    username = forms.CharField(
                    max_length = 50,
                    widget = forms.TextInput(
                        attrs = {
                            'class': 'form-control',
                            'placeholder': 'Usuario',
                            'autofocus': 'true'
                        }
                    )
                )
    password = forms.CharField(
                    max_length = 50,
                    widget = forms.TextInput(
                        attrs = {
                            'type': 'password',
                            'class': 'form-control',
                            'placeholder': 'Contraseña'
                        }
                    )
                )
    # next = forms.CharField(widget=forms.HiddenInput)