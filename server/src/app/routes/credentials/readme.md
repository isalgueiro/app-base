#Registro de usuarios

### Manual
## GOD
- Creación manual en base de datos
````json
{
    "name" : "god user",
    "email" : "admin@agorabinaria.com",
    "password" : "AGoodGodPassword:-)",
    "status" : "ACTIVE"
}
```` 
*Los demás usuarios nacerán con estado 'PENDING' y recibirán un coprreo para activar sus cuentas*

## Invitados
### ADMIN
- Invitado por GOD, asignado a una organization
````json
{
    "name" : "Organization admin name",
    "email" : "user@organization.com",
    "organizationId" : 1,
    "roles" : ["ADMIN"]
}
````

### ORGANIZER USHER
- Invitados por ADMIN, asignado a una organization
````json
{
    "name" : "Gumersindo",
    "email" : "sindo@organization.com",
    "organizationId" : 1,
    "roles" : ["ORGANIZER" | "USHER"]
}
````  


## Auto Registro
### CLIENT
- Auto registro
````json
{
    "name" : "Kevin Bacon",
    "email" : "kevin@gmail.com",
    "password" : "hisOwnPassword:-)",
    "organizationId" : 1,
}
```` 

### PUBLIC
- Auto registro, sin contraseña
````json
{
    "name" : "Mariano",
    "email" : "mariano@gobierno.es",
    "phone" : "666123456",
    "organizationId" : 1,
}
```` 


#Activación de cuenta
## Enviar un correo de activación a los invitados y autoregistrados
## Página de confirmación de cuenta 