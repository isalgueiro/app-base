Sistema de Gestión de reservas comedores 
==========================================
Director
--------
- Usuario administrador asociado a un centro de formación
### Modificar datos propios del centro
  - Datos generales del centro
  - Establecer aforo y precios generales
### Invitar al sistema a otros usuarios
  - Profesores / Organizadores de los eventos
  - Ujieres controladores de acceso y pagos
### Aceptar registro de alumnos
  - Alumnos y otros usuarios registrados en el sistema
### Aceptar reservas del público
  - De usuarios no registrados en el sistema
### Visión del estado de los eventos
  - Ver eventos
  - Ver reservas para un evento
  - Ver estado de pagos de las reservas

Profesor
--------
- Es un usuario invitado al sistema por el administrador de un centro que puede organizar eventos
### Crear eventos (ofertas de comedor)
  - Elegir fecha, turno y restaurante
  - Crear la oferta 
  - Modificar aforo y precios si procede
### Ver eventos propios
  - Consultar el número reservas para cada evento
  - Modificar o cancelar un evento

Ujier
-----
- Es personal invitado al sistema por el administrador de un centro para controlar asistencia y pagos.
### Consultar reservas de un evento 
  - Elegir fecha, turno y restaurante
  - Ver las reservas para dicho evento
### Control de acceso
  - Buscar por distintos criterios entre las reservas de un evento 
  - Marcar asistencia
### Control de pago  
  - Marcar pago de una reserva: importe y medio


Alumno
------
- Es un usuario que se registra como cliente en el sistema y necesita ser aprobado por el administrador de un centro
### Registro
  - Indicando nombre y dirección de email
  - Establece su propia contraseña
  - Espera aprobación por parte del administrador
### Ver eventos (ofertas de comedor)
  - Ver las ofertas posibles
### Crear una reserva en un evento
  - Indicar observaciones
  - Recibirá confirmación por email
### Ver reservas propias
  - Consultar las reservas a su nombre
  - Modificar o cancelar una reserva

Público externo
---------------
- Es un usuario que se registra como público en el sistema cuando hace la reserva. Necesita ser aprobado por el administrador de un centro. No tendrá contraseña propia.
### Ver eventos (ofertas de comedor)
  - Ver las ofertas posibles
### Crear una reserva en un evento
  - Registro con nombre, email y teléfono
  - Indicar número de comensales
  - Indicar observaciones
  - Recibirá aprobación por email que deberá confirmar
### Email de reserva
  - Incluye un enlace seguro para la reserva tratada
  - Es obligatorio que confirme la reserva usado dicho enlace
  - Puede usar ese enlace para posteriore modificaciones o cancelaciones
### Enlace desde email a reserva actual
  - Ver las reserva desde enlace seguro
  - Modificar o cancelar dicha reserva