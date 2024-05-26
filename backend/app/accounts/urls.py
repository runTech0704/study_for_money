from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from .views import UserView, login, logout
from .wallet.views import WalletView, account


urlpatterns = [

    # Wallet Resource
    path('wallet/<str:user_id>/accounts', account, name='account'),
    path('wallet/<str:user_id>', WalletView.as_view(), name='wallet'),

    # JWT Token
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # User Resource
    path('register/', UserView.as_view(), name='register'),
    path('update/', UserView.as_view(), name='update'),
    path('delete/', UserView.as_view(), name='delete'),
    path('login/', login, name='login'),
    path('logout/', logout, name='logout'),
    path('<str:user_id>/', UserView.as_view(), name='detail'),
]
