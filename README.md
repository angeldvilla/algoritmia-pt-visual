# Algoritmo de Consultas

Esta prueba es una aplicación web sencilla que permite realizar consultas sobre una lista de números. Dado un número de consulta, se muestra el número más grande que sea menor y el número más pequeño que sea mayor al número consultado. 

## Descripción

La aplicación toma como entrada:
1. El tamaño de la lista base de números.
2. La lista base de números (ordenada de menor a mayor).
3. El número de consultas que se realizarán.
4. La lista de números de consulta.

Por cada número de consulta, la aplicación mostrará:
- El número más grande menor que la consulta.
- El número más pequeño mayor que la consulta.

## Requisitos

Para ejecutar este proyecto necesitas un navegador web moderno que soporte HTML5 y JavaScript.

## Ejecución

Sigue estos pasos para ejecutar la aplicación:

1. **Descarga el proyecto:**
   - Puedes clonar este repositorio o descargar el archivo ZIP.

   ```bash
   git clone https://github.com/tu-usuario/algoritmia-pt-visual.git


2. **Estructura del proyecto:**
    El proyecto consiste en los siguientes archivos:
        -index.html: Contiene la estructura básica de la página y los campos de entrada.
        -script.js: Contiene la lógica para procesar las consultas y mostrar los resultados.

3. **Ejecutar el proyecto:**
    - Navega a la carpeta donde se encuentra el proyecto y ejecuta.
    
    ```bash
    open index.html

    - Otra opcion es usar la extensión de VS code live server y poner a correr el index.html.

4. **Ingresar los datos:**
    - Ingresa el tamaño de la lista en el campo Tamaño de la lista.
    - Ingresa la lista base de números separados por espacios en el campo Lista base (números separados por espacio, de menor a mayor).
    - Ingresa el número de consultas en el campo Número de consultas.
    - Ingresa la lista de números de consulta separados por espacios en el campo Lista de consultas (números separados por espacio).

5. **Ejecutar consulta:**
    - Haz clic en el botón Ejecutar Consulta.
    - Los resultados aparecerán en la sección de Resultado, mostrando el número más grande menor que cada consulta y el número más pequeño mayor que la consulta.