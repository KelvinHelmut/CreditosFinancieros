from django.shortcuts import render
from django.views.generic import FormView, RedirectView
from django.contrib.auth import authenticate, login, logout

from .forms import LoginForm
from .models import User

class LoginView(FormView):
    form_class = LoginForm
    template_name = 'login.html'

    def form_valid(self, form, *args, **kwargs):
        username = form.cleaned_data['username']
        password = form.cleaned_data['password']
        user = authenticate(username=username, password=password)
        if user is None:
            context = self.get_context_data(**kwargs)
            context['errors'] = ['Usuario y/o contraseña incorrectos.']
        else:
            if user.is_active:
                login(self.request, user)
                return super(LoginView, self).form_valid(form)
            else:
                context = self.get_context_data(**kwargs)
                context['errors'] = ['Usuario inactivo.']

        return render(self.request, self.template_name, context)
        
    def get_success_url(self):
        print('success')
        next_url = self.request.GET.get('next', '/')
        if next_url is not None and next_url != '':
            return next_url
        return '/'


class LogoutView(RedirectView):
    url = '/'

    def get_redirect_url(self, *args, **kwargs):
        logout(self.request)
        return super(LogoutView, self).get_redirect_url(*args, **kwargs)
