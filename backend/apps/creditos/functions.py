import random

def get_deuda_sbs(dni):
    deuda = random.randint(0, 9999)
    deuda *= random.randint(0, 1)
    return deuda

def get_calificacion_sentinel(dni):
    calificacion = random.randint(-1, 1)
    return calificacion

def get_prediccion_ia(dni):
    prediccion = random.randint(1, 10)
    return prediccion