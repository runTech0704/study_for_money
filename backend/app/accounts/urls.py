from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from .views import UserView, login, logout


urlpatterns = [
    path('register/', UserView.as_view(), name='register'),
    path('update/', UserView.as_view(), name='update'),
    path('delete/', UserView.as_view(), name='delete'),
    path('login/', login, name='login'),
    path('logout/', logout, name='logout'),

    # JWT トークン
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
