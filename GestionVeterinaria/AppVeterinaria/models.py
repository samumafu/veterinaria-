from django.db import models


class Propietario(models.Model):
    nombre = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    telefono = models.CharField(max_length=20)

    def __str__(self):
        return self.nombre

class Mascota(models.Model):
    nombre = models.CharField(max_length=100)
    tipo = models.CharField(max_length=50)  
    raza = models.CharField(max_length=50)
    fecha_nacimiento = models.DateField()
    propietario = models.ForeignKey(Propietario, on_delete=models.CASCADE, related_name='mascotas')

    def __str__(self):
        return f"{self.nombre} ({self.tipo})"

class Visita(models.Model):
    mascota = models.ForeignKey(Mascota, on_delete=models.CASCADE, related_name='visitas')
    fecha = models.DateField()
    motivo = models.TextField()
    servicio_realizado = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.mascota.nombre} - {self.servicio_realizado} ({self.fecha})"

class Vacuna(models.Model):
    mascota = models.ForeignKey(Mascota, on_delete=models.CASCADE, related_name='vacunas')
    nombre = models.CharField(max_length=100)
    fecha_aplicacion = models.DateField()
    tipo_animal = models.CharField(max_length=50)  

    def __str__(self):
        return f"{self.nombre} - {self.mascota.nombre}"

