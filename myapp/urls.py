from django.urls import path
from . import views
urlpatterns = [
    path('', views.index,name="index"),
    path('get_explanation/', views.get_explanation, name='get_explanation'),
    path('get_answer/', views.get_answer, name='get_answer'),
    path('get_questions/', views.get_questions, name='get_questions'),
    path('tests/', views.tests, name='tests'),
]
