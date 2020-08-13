# Créditos Financieros

### Tecnología usada en el desarrollo

- Python 3.8
- Pipenv
- Postgresql 12.3
- Archlinux
- Visual studio code

## Back-end

- Modificar el archivo backend/backend/settings.py y modificar USER y PASSWORD con los valores de su usuario y contraseña de su gestor de base de datos

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'creditos_financieros',
        'USER': 'postgres',
        'PASSWORD': '',
        'HOST': 'localhost',
        'PORT': '5432',
        'ATOMIC_REQUESTS': True,
    }
}
```

- Crear base de datos 'creditos_financieros' en postgresql

```bash
$ createdb -U postgres creditos_financieros
```

- Instalar dependencias

```bash
$ pip install -r requirements.txt
```

- Entrar a la carpeta 'backend' e iniciar servidor web

```bash
$ cd backend
$ python manage.py migrate
$ python manage.py createsuperuser 
$ python manage.py runserver
```

## Front-end

Ingresar a la carpeta 'frontend', instalar dependencias e iniciar aplicativo web

```bash
$ cd frontend
$ npm install
$ ng serve --open
```