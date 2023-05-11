from django.contrib import admin
from django.urls import path
import ia_app.views.api_openai as api
import ia_app.views.auth_view as auth_view
import ia_app.views.user_view as user_view
import ia_app.views.clientes_view as clientes_view
import ia_app.views.chatbot_view as chatbot_view
import ia_app.views.facturacion_view as facturacion_view
import ia_app.views.bots_view as bots_view
import ia_app.views.cuenta_view as cuenta_view
import ia_app.views.configuracion_view as configuracion_view
import ia_app.views.subs_view as subs_view
import ia_app.views.msg_view as msg_view
import ia_app.views.historial_view as historial_view
import ia_app.views.api_bot as api_bot
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    # Auth
    path('admin/', admin.site.urls),
    path('', auth_view.login_form_view),
    path('login', auth_view.login_view),
    path('logout', auth_view.logout_view),
    path('dashboard', auth_view.return_base_view),
    path('api/mensajes', auth_view.devolverMensajes),
    path('openai/train', api.test_openai),
    path('openai/question', api.answer_openai),
    path('user/register', user_view.register_user),

    path('clientes', clientes_view.obtenerClientes),
    path('clientes/agregar', clientes_view.agregarCliente),
    path('clientes/obtenerCliente', clientes_view.obtenerCliente),
    path('clientes/editarCliente', clientes_view.editarCliente),
    path('clientes/eliminar', clientes_view.eliminarCliente),
    path('clientes/activarCliente', clientes_view.activarCliente),
    path('clientes/desactivarCliente', clientes_view.desactivarCliente),

    path('chatbot', chatbot_view.chat),

    # path('limitaciones', limitaciones_view.limitaciones),

    path('openai/prueba', api.support),
    path('openai/config', bots_view.test_config),
    path('openai/pruebaZapien', api.test_zapien),
    # path('facturacion', facturacion_view.facturacion),
    path('bots', bots_view.bots),
    path('bots/create', bots_view.create),
    path('bots/editar', bots_view.edit),
    path('bots/editInfo', bots_view.editInfo),
    path('bots/off', bots_view.off),
    path('bots/skills', bots_view.config),
    path('bots/simulator', bots_view.simulator),
    path('bots/modaledit', bots_view.modalEdit),
    path('bots/setBtn', bots_view.settingsBtn),
    path('bots/addBtn', bots_view.addButton),
    path('bots/activate', bots_view.activate),
    path('bots/delete', bots_view.delete),

    path('historial', historial_view.index),
    path('generarToken/obtener', auth_view.generarToken),
    # path('bots', bots_view.bots),

    # path('cuenta', cuenta_view.cuenta),

    # path('configuracion', configuracion_view.index),

    # path('subs', subs_view.index)


    # no mover de la linea 75 pruebas Zapien  (X_X) <- si le mueves
    # path('openai/pruebaZapien',api_bot.question_bot),
    path('pruebas', api_bot.test),
    # implementacion de JWT
    # path('admin/', admin.site.urls),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # Ruta de JWT
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    # vistaProtegida
    path('protegida/', api_bot.ApiBotView.as_view(), name='protegida'),

]
