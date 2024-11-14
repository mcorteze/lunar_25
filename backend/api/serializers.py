from rest_framework import serializers
from .models import *

class RolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rol
        fields = '__all__'

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['usuario_id', 'nombre', 'email', 'fecha_creacion', 'rol', 'usuario_padre']
        # Excluye el campo de contraseña
        extra_kwargs = {
            'contraseña': {'write_only': True}  # Asegúrate de que la contraseña solo pueda ser escrita, no leída
        }

# Crea otros serializers para los modelos adicionales
