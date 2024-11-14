# views.py
from rest_framework import serializers
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Usuario  # Importa tu modelo Usuario personalizado

# Serializador para el Usuario autenticado
class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario  # 'Usuario' debe ser el modelo correcto
        fields = ['usuario_id', 'nombre', 'email']  # Asegúrate de que estos campos existen en el modelo

# Vista para obtener los detalles del usuario autenticado
class UsuarioDetail(APIView):
    permission_classes = [IsAuthenticated]  # Protege el endpoint, permitiendo solo usuarios con token válido

    def get(self, request, format=None):
        usuario = Usuario.objects.get(usuario_id=request.user.id)  # Obtiene el usuario autenticado usando el token
        serializer = UsuarioSerializer(usuario)
        return Response(serializer.data)  # Devuelve datos exclusivos del usuario autenticado
