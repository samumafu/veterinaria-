from AppVeterinaria.models import Mascota
from django.db.models import Count

class MascotaRepository:

    @staticmethod
    def get_all():
        return Mascota.objects.all()

    @staticmethod
    def get_with_most_visits():
        return Mascota.objects.annotate(total_visitas=Count('visitas')).order_by('-total_visitas')

