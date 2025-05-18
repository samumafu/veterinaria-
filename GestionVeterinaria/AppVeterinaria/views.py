from django.http import JsonResponse
from AppVeterinaria.repositories.mascota_repository import MascotaRepository
from AppVeterinaria.repositories.vacuna_repository import VacunaRepository
from AppVeterinaria.repositories.propietario_repository import PropietarioRepository
from AppVeterinaria.repositories.visita_repository import VisitaRepository

def mascotas_mas_visitas(request):
    mascotas = MascotaRepository.get_with_most_visits()
    data = [
        {
            "nombre": m.nombre,
            "tipo": m.tipo,
            "propietario": m.propietario.nombre,
            "total_visitas": m.total_visitas
        } for m in mascotas
    ]
    return JsonResponse(data, safe=False)

def vacunas_por_tipo_animal(request):
    vacunas = VacunaRepository.count_by_tipo_animal()
    data = list(vacunas)  
    return JsonResponse(data, safe=False)


def propietarios_con_muchas_mascotas(request):
    propietarios = PropietarioRepository.get_with_more_than_n_mascotas(3)
    data = [
        {
            "nombre": p.nombre,
            "email": p.email,
            "telefono": p.telefono,
            "total_mascotas": p.masctoas.count()
        } for p in propietarios
    ]
    return JsonResponse(data, safe=False)

def servicios_mas_solicitados(request):
    servicios = VisitaRepository.get_most_common_services()
    data = list(servicios)  
    return JsonResponse(data, safe=False)