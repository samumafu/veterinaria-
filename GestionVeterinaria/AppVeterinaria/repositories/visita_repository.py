from AppVeterinaria.models import Visita
from django.db.models import Count

class VisitaRepository:

    @staticmethod
    def get_all():
        return Visita.objects.all()

    @staticmethod
    def get_most_common_services():
        return Visita.objects.values('servicio_realizado').annotate(total=Count('servicio_realizado')).order_by('-total')
