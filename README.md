
# Clima

![Static Badge](https://img.shields.io/badge/Estado%20-%20Terminado%20-%20green)

## Introducción
Esta app ofrece al usuario información sobre el clima de cualquier parte del mundo

## Tabla de contenido
* [Introducción](#Introducción)
* [Tabla de contenido](#Tabla-de-contenido)
* [Tipo de proyecto](#Tipo-de-proyecto)
* [Capturas de pantalla](#Capturas-de-pantalla)
* [Estrategias](#Estrategias)
* [Tecnologías utilizadas](#Tecnologías-utilizadas)
* [Estructura](#Estructura)
* [Instalación](#Instalación)
* [Uso](#Uso)


## Tipo de proyecto
Proyecto individual.

## Capturas de pantalla 
<p align="center">
<img src="https://i.postimg.cc/ZnMRHHf6/Whats-App-Image-2024-02-29-at-00-18-03.jpg" width=200/>
<img src="https://i.postimg.cc/N0Bg1ZgW/Whats-App-Image-2024-02-29-at-00-18-04.jpg" width=200/>

</p>

## Estrategias
### Smart y Dumb Component
Se separaron los componentes que se utilizan en el proyecto en smart  y dumb component según la responsabilidad que tengan. Esto lo hice con el objetivo de obtener un código mas conciso y una mejor legibilidad </br> 
**Smart**:  Tendrán la lógica del componente, operaciones complejas , gestionan eventos y acciones del usuario.</br>
**Dumb**: No manejan la lógica, se encargan únicamente de la presentación.


### Carpeta Auxiliar
En esta carpeta guardo distintas funciones o variables constantes que usare a lo largo de todo el proyecto, de esta forma evito repetir código y con las variable contantes definidas evito tener cadenas mágicas 


### Carpeta Type
Aca guardo distintos types que utilizo duranto todo el proyecto

### Utilizo useContext
Dentro de la carpeta context guardo distintos useContext que voy utilizando a lo largo de todo el proyecto, de esta forma evito estar pasando como parametros dichas variables.


## Tecnologías utilizadas
  - React native
  - Typescript


## Estructura 

```
Clima
├─ .gitignore
├─ .vscode
│  └─ .react
├─ app.json
├─ App.tsx
├─ assets
│  ├─ adaptive-icon.png
│  ├─ clima
│  │  ├─ 01d.png
│  │  ├─ 01n.png
│  │  ├─ 02d.png
│  │  ├─ 02n.png
│  │  ├─ 03d.png
│  │  ├─ 03n.png
│  │  ├─ 04d.png
│  │  ├─ 04n.png
│  │  ├─ 09d.png
│  │  ├─ 09n.png
│  │  ├─ 10d.png
│  │  ├─ 10n.png
│  │  ├─ 11d.png
│  │  ├─ 11n.png
│  │  ├─ 13d.png
│  │  ├─ 13n.png
│  │  ├─ 50d.png
│  │  ├─ 50n.png
│  │  ├─ logo.png
│  │  └─ weather.svg
│  ├─ favicon.png
│  ├─ icon.png
│  └─ splash.png
├─ babel.config.js
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ auxiliar
│  │  ├─ buscarCiudad.ts
│  │  ├─ celcius.ts
│  │  ├─ color.tsx
│  │  └─ mensajes.tsx
│  ├─ components
│  │  ├─ dumb
│  │  │  ├─ DCiudad.tsx
│  │  │  ├─ DInfoAdicional.tsx
│  │  │  ├─ DInfoClave.tsx
│  │  │  └─ DTitulo.tsx
│  │  └─ smart
│  │     ├─ SCiudad.tsx
│  │     ├─ SComenzar.tsx
│  │     ├─ SError.tsx
│  │     ├─ SEstado.tsx
│  │     ├─ SFBusqueda.tsx
│  │     ├─ SNavigation.tsx
│  │     ├─ SPantalla.tsx
│  │     ├─ SScreens.tsx
│  │     ├─ SStackClima.tsx
│  │     └─ SVolver.tsx
│  ├─ context
│  │  ├─ CiudadContext.tsx
│  │  ├─ CiudadInicioContext.tsx
│  │  └─ EstadoContext.tsx
│  ├─ screen
│  │  ├─ Busqueda.tsx
│  │  ├─ Clima.tsx
│  │  ├─ Comenzar.tsx
│  │  └─ Inicio.tsx
│  └─ types
│     └─ types.ts
└─ tsconfig.json

```

## Instalación 
Antes de descargar o clonar el repositorio es necesario que usted instale Node (https://nodejs.org/en). </br>
Una vez descargado o clonado el repositorio, abra la terminal en la ruta donde se encuentra el proyecto y escriba el siguiente comando.
```
npm i
```
Esto instalara las dependencias que necesite el proyecto

## Uso
En caso de haber seguido los pasos de la instalación solo debe ejecutar el siguiente comando:
```
npm run start
```
y seguir las instrucciones en pantalla

En caso de saltarse los paso de instalación y querer probar la app para le dejo el link para su descarga en **android**:  <a href="https://expo.dev/artifacts/eas/deCUgtcnCBj7EUdK25Ziey.apk">APK</a>


</br>

> [!NOTE]
> Recuerde que es una APK así que es necesario dar permisos para poder instalarla

