from django.urls import path

from .views import StudyLabelView

urlpatterns = [
    path('label/', StudyLabelView.as_view()),
    path('label/<str:study_label_id>', StudyLabelView.as_view())
]
