from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from .views import UserView


urlpatterns = [
    path('register/', UserView.as_view(), name='register'),
    path('update/', UserView.as_view(), name='update'),
    path('delete/', UserView.as_view(), name='delete'),
    path('login/', UserView.login, name='login'),
    path('logout/', UserView.logout, name='logout'),

    # JWT トークン
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
