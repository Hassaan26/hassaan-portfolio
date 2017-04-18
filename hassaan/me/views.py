# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.template import loader
from django.shortcuts import render

# Create your views here.

def index(request):
    template = loader.get_template('index.html')
    return render(request, 'index.html')