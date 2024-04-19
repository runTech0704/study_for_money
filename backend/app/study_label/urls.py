from django.urls import path

from .views import StudyLabelView

urlpatterns = [
    path('', StudyLabelView.as_view()),
    path('<str:study_label_id>/', StudyLabelView.as_view())
]
