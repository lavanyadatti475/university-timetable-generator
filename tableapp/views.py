from django.shortcuts import render

def home(request):
    return render(request,"homepage.html")

def word(request):
    return render(request,"loginpage.html")

def hello(request):
    return render(request,"sign in page.html")

def admin(request):
    return render(request,"adminpage.html")

def forgot(request):
    return render(request,"reset.html")

def timetable(request):
    return render(request,"generate timetable.html")

def logout(request):
    return render(request,"logout.html")

def home2(request):
    return render(request,"homepage2.html")