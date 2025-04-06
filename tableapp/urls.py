from django.urls import path
from . import views

urlpatterns=[
    path('',views.home),
    path('adminpage.html/',views.admin),
    path('loginpage.html/',views.word),
    path('sign in page.html/',views.hello),
    path('reset.html/',views.forgot),
    path('generate timetable.html/',views.timetable),
    path('logout.html/',views.logout),
    path('homepage2.html/',views.home2),
]
