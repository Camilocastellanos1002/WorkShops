# 1. WorkShop pipelines NodeJs

* nest --version (ver la version de nest)
* npm install -g @nestJs/cli (si no esta instalado)
* nest new api-with-linter (crear proyecto de NestJs), luego seleccionar npm 

### Que es pipelines
es una secuencia de automatizacion de pasos que procesan informacion para garantizar elementos claves dentro del ciclo de vida de desarrollo como la calidad, seguridad y despliegue
![image](https://github.com/user-attachments/assets/47eeec4f-004a-443b-b80e-10eff63644c1)


### Que es linter
herramienta que permite analizar el codigo en busqueda de errores, malas paracticas y problemas de estilos, ya puede estar instalada en el IDE

![image](https://github.com/user-attachments/assets/794e2fa5-cf9d-420a-a5d4-0b7c351fa936)


### Que es Github Actions 
plataforma de integracion continua, que permite automatizar flujos y procesos directamente desde los repositorios, escucha los eventos (push, pull request, etc) sobre los repositorios y generando tareas automatizadas segun cada caso programado existen otros proveedores similares como
![image](https://github.com/user-attachments/assets/659d0359-2a8f-4822-ae0b-16937b764de2)


### Practica 
![image](https://github.com/user-attachments/assets/93703da8-72dd-46ea-85da-31854bf473e1)




# 2. WorkShop Unit Test con Jest en NetsJS

Workshop crear pruebas unitarias en NestJS con Jest, lo que permite asegurar la calidad del codigo

###  Que es SDLC (Software Development Life Cycle) (Cilo de vida del desarrollo de Software)

1. Planificacion
2. Diseño
3. Implementacion
4. QA - Pruebas
5. Despliegue
6. Mantenimiento

Existen diferentes tipos de pruebas como lo son : 

![image](https://github.com/user-attachments/assets/30c2170f-99b0-47e9-9d99-0bbebf9b7787)


![image](https://github.com/user-attachments/assets/d1ba5d28-7d72-44c3-8766-2f2cb9946286)


# TDD (Test Driven Development ó desarrollo dirigido por tests)

![image](https://github.com/user-attachments/assets/be15c8c0-5456-46a9-8b62-30f348279334)


### Practica 
![image](https://github.com/user-attachments/assets/62f8821c-9c97-459d-80d7-b688aef1b2a7)

### Ejecutando 1 y 2  
en el package.json existen diferentes varias pruebas unitarias de las cuales vamos a ejecutar

![image](https://github.com/user-attachments/assets/b563b669-819c-42a3-ba96-f65901573b47)

si modificamos un parametro, como por ejemplo en el app.controller.spec.ts en vez de enviar hello world, enviamos hola mundo se genera lo siguiente: 

![image](https://github.com/user-attachments/assets/581797ba-9a4c-48ef-9b68-d7c764ab3c33)

otro ejemplo
![image](https://github.com/user-attachments/assets/e7592f1e-6111-4539-b67a-5db9d8b96004)


### ejecutando el 3er punto

generamos un nuevo servicio, nuevo controller y un nuevo test

![image](https://github.com/user-attachments/assets/dfd7daef-d4c2-4244-a6ea-7d71769a1fbd)
