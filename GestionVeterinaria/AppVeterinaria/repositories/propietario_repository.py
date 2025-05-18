from AppVeterinaria.models import Propietario
from django.db.models import Count

class PropietarioRepository:

    @staticmethod
    def get_all():
        return Propietario.objects.all()

    @staticmethod
    def get_by_id(id):
        return Propietario.objects.filter(id=id).first()

    @staticmethod
    def get_with_more_than_n_mascotas(n):
        return Propietario.objects.annotate(total_mascotas=Count('mascotas')).filter(total_mascotas__gt=n)
