from AppVeterinaria.models import Vacuna
from django.db.models import Count

class VacunaRepository:

    @staticmethod
    def get_all():
        return Vacuna.objects.all()

    @staticmethod
    def count_by_tipo_animal():
        return Vacuna.objects.values('tipo_animal', 'nombre').annotate(total=Count('id')).order_by('-total')
