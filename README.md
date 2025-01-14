# Harry Potter

## Índice

* [1. Resumen del proyecto](#2-resumen-del-proyecto)
* [2. Investigación UX](#3-investigación-UX)
* [3. Historias de Usuario](#4-historias-de-usuario)
* [4. Diseño de la Interfaz de Usuario](#5-diseño-de-la-interfaz-de-usuario)
* [5. Testeos de usabilidad](#6-testeos-de-usabilidad)
* [6. Pruebas unitarias](#7-pruebas-unitarias)


***

## 1. Resumen del proyecto
Nuestro sitio web es una fanpage con temática de Harry Potter para sus fans, en la cual pueden ver información sobre las películas, personajes, casas de estudio, hechizos y pociones utilizados por los personajes; así como datos curiosos relacionados a la saga. El objetivo es hacer un sitio donde el usuario se sienta cómodo al navegar, que su interfaz sea amigable pero a la vez dinámica y cautivadora. Puedes ver nuestro proyecto final [aquí][github-page-Misdely].
***

## 2. Investigación UX

### __¿Quiénes son los principales usuarios del producto?__

Fans principiantes o usuarios principiantes, que quieran conocer más sobre los personajes de la saga, hechizos, libros, pociones o algún dato curioso sobre Harry Potter, también personas que necesiten realizar algún tipo de investigación acerca de la temática.

### __¿Cuáles son los objetivos de estos usuarios en relación con el producto?__

Conocer más acerca de personajes que aparecen en la saga, ya que se podrá encontrar información básica como nombre, especie, género, fecha de nacimiento, casa de estudio, saber si es un ser mágico o muggle, grupos a los que pertenece, libros en los que aparece entre otras cosas como pociones, hechizos y datos curiosos.

### __¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?__

Se espera visualizar personajes, todos los libros escritos por J.K Rowling e información detallada de cada uno, su año de lanzamiento, personajes, las casas: Gryffindor, Hufflepuff, Ravenclaw y Slytherin y mucho más.

### __¿Cuándo utilizan o utilizarían el producto?__

En los tiempos libres para distraerse, compartir con familiares y amigos.  También para personas que necesiten realizar algún trabajo o presentaciones que contengan esta temática y necesiten de esta información.


***
## 3. Historias de Usuario

![historiaUsuario]

Todo esto realizado con html dinámico en `main.js`
***
## 4. Diseño de la Interfaz de Usuario



### __Prototipo de baja fidelidad__

![prototipo1]


### __Prototipo de alta fidelidad__

 [Ir al prototipo interactivo de Figma][prototype-url]

 ![prototipo2]
***
## 5. Testeos de usabilidad
Al probar la implementación de nuestro diseño y recibir feedback de compañeras, identificamos posibles mejoras que aplicamos en el código. Los principales problemas y sus resoluciones fueron:

* Las imágenes se sobreponen cuando se va a achicando la pantalla, se agrega propiedad en css para disminuir tamaño en pantallas menores.
* El texto de las cartas sobrepasaba las tarjetas, se modificó padding, margin, line height para ajustar el texto a la carta.
* El menú en pantallas pequeñas no cerraba luego de dirigirte a la página seleccionada, se modificó función para que cerrará menú desplegable.
* Imágenes de página principal en pantallas pequeñas se mostraban debajo del texto, se modificó medias queries para que las imágenes se ocultarán.
* Las cartas que muestras imágenes e información de la data en pantallas pequeñas se alineaban a la izquierda, se centro la columna en media queries.

***
## 6. Pruebas unitarias

Se realizaron los test a las funciones de cada página que filtra, ordena y muestra la información de la data y obtuvimos los siguientes resultados:

![testingApp]

<!-- MARKDOWN LINKS & IMAGES -->
[prototipo1]: ./src/img/prototype/lo-fi-prototype.jpg
[prototipo2]: ./src/img/prototype/HarryPotterPage.png
[prototype-url]: https://www.figma.com/proto/r4WNNhy1BF9AtnZGIKXqRo/HarryPotterPage?page-id=0%3A1&node-id=1%3A2&viewport=449%2C618%2C0.12&scaling=scale-down-width&starting-point-node-id=1%3A2
[historiaUsuario]: ./src/img/prototype/historiaDeUsuario.PNG
[testingApp]: ./src/img/test.png
[github-page-Misdely]: https://misdelymorales.github.io/HarryPotterFanPage/
