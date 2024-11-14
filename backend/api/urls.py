# urls.py
from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import UsuarioDetail

urlpatterns = [
    path('usuarios/', UsuarioDetail.as_view(), name='usuario-detail'),  # Cambiar a usuario autenticado
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
