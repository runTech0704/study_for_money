from django.contrib import admin
from django.urls import path, include

test_urlpatterns = [
    path('admin/', admin.site.urls),
    path('demo_app/', include('demo_app.urls')),
]

api_urlpatterns = [
    path('study-label/', include('app.study_label.urls'))
]

urlpatterns = [
    path('api/', include(api_urlpatterns)),

    # test path
    path('test/', include(test_urlpatterns))
]
