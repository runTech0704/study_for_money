from django.urls import path
from .views import list_persons

urlpatterns = [
    path('persons/', list_persons, name='list_persons'),
]
