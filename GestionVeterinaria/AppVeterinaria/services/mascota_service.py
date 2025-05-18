from AppVeterinaria.repositories.mascota_repository import MascotaRepository

class MascotaService:
    def __init__(self):
        self.repo = MascotaRepository()

    def listar_mascotas(self):
        return self.repo.get_all()

    def obtener_mascotas_con_mas_visitas(self):
        return self.repo.get_mascotas_con_mas_visitas()
