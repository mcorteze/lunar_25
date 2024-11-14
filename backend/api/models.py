from django.db import models

# Tipos ENUM en PostgreSQL
class Rol(models.Model):
    rol_nombre = models.CharField(max_length=255, unique=True)
    descripcion = models.TextField()

    def __str__(self):
        return self.rol_nombre

class Usuario(models.Model):
    usuario_id = models.AutoField(primary_key=True)  # Definir explícitamente la clave primaria
    nombre = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    contraseña = models.CharField(max_length=255)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    rol = models.ForeignKey('Rol', on_delete=models.CASCADE)
    usuario_padre = models.ForeignKey('self', null=True, blank=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.nombre



class RegistroDiario(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    fecha = models.DateTimeField()
    contenido = models.CharField(max_length=600)
    tipo = models.CharField(max_length=20, choices=[('diario', 'Diario'), ('carta', 'Carta')])
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_modificacion = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"Registro {self.registro_id} - {self.usuario.nombre}"


class Carta(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    fecha = models.DateTimeField()
    contenido = models.TextField()
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_modificacion = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"Carta {self.carta_id} - {self.usuario.nombre}"


class FotoDiaria(models.Model):
    registro = models.ForeignKey(RegistroDiario, on_delete=models.CASCADE)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    url_foto = models.CharField(max_length=255)
    fecha_creacion = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Foto {self.foto_id} - {self.registro.registro_id}"


class Notificacion(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    mensaje = models.TextField()
    fecha_envio = models.DateTimeField(auto_now_add=True)
    estado = models.CharField(max_length=20, choices=[('leída', 'Leída'), ('no leída', 'No Leída')])

    def __str__(self):
        return f"Notificación {self.notificacion_id} - {self.usuario.nombre}"


class Configuracion(models.Model):
    clave = models.CharField(max_length=255)
    valor = models.CharField(max_length=255)
    descripcion = models.TextField()

    def __str__(self):
        return self.clave


class RelacionPadreHijo(models.Model):
    padre = models.ForeignKey(Usuario, related_name="padre", on_delete=models.CASCADE)
    hijo = models.ForeignKey(Usuario, related_name="hijo", on_delete=models.CASCADE)
    fecha_inicio = models.DateTimeField()
    estado = models.CharField(max_length=20, choices=[('activa', 'Activa'), ('inactiva', 'Inactiva')])

    def __str__(self):
        return f"Relación {self.relacion_id} - Padre: {self.padre.nombre}, Hijo: {self.hijo.nombre}"


class LogActividad(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    actividad = models.CharField(max_length=255)
    fecha = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Log {self.log_id} - {self.usuario.nombre}"
