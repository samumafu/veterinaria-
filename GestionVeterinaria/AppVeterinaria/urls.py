from django.urls import path
from . import views

urlpatterns = [
    path('mascotas-mas-visitas/', views.mascotas_mas_visitas),
    path('vacunas-por-tipo/', views.vacunas_por_tipo_animal),
    path('propietarios-muchos-mascotas/', views.propietarios_con_muchas_mascotas),
    path('servicios-mas-solicitados/', views.servicios_mas_solicitados),
]