from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from ia_app.models import Bot
from ia_app.models import Empresa
from ia_app.models import Tema
from ia_app.models import Skill
from ia_app.models import Mensajes
from ia_app.models import Boton
from ia_app.models import Detalles
from django.http import JsonResponse
from django.http import HttpResponse


def index(request):
    bots = Bot.objects.all()

    return render(request, 'historial.html', {'bots': bots})
