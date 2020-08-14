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

- Abrir un terminal en la carpeta del proyecto y ejecutar los siguientes comandos

```bash
# Solo ejecutar solo uno(el de su preferencia)

# Preparar entorno con virtualenv
$ virtualenv .env
$ source .env/bin/activate

# Preparar entorno con pipenv
$ pipenv shell
```

```bash
$ cd backend
$ pip install -r requirements.txt
$ python manage.py migrate
$ python manage.py createsuperuser 
$ python manage.py runserver 0.0.0.0:8000
```

- Una vez configurado, inicie el servidor backend

```bash
$ python manage.py runserver 0.0.0.0:8000
```

- Ingresar a http://localhost:8000/admin iniciar sesión con el usuario creado en la terminal y podrá crear trabajadores, estos son los que serán encargados de aprobar o rechazar los créditos

## Front-end

- Abrir un terminal en la carpeta del proyecto y ejecutar los siguientes comandos

```bash
$ cd frontend
$ npm install
$ ng serve --open
```

- Se abrirá un página web en http://localhost:4200
- Desde esta página podrá registrarse como cliente y solicitar créditos
- Si ingresa con un usuario de trabajador podrá aprobar y rechazar créditos