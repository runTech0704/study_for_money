from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

test_urlpatterns = [
    path('admin/', admin.site.urls),
    path('demo_app/', include('demo_app.urls')),
]

api_urlpatterns = [
    path('study-label/', include('app.study_label.urls'))
]

urlpatterns = [
    # APIs
    path('api/', include(api_urlpatterns)),

    # Applications
    path('study-label', TemplateView.as_view(template_name='index.html')),

    # test path
    path('test/', include(test_urlpatterns))
]
