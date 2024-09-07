from django.shortcuts import render, HttpResponse
#from django.http import HttpResponse

def about(request):
    # return HttpResponse('Hi there!')
    return render(request, 'about.html')

def home(request):
    return render(request, 'home.html')