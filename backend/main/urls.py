from django.urls import path
from .views import groups, items

 
urlpatterns = [
    path('groups/', groups, name='groups'),
    path('items/', items, name='items'),
]
