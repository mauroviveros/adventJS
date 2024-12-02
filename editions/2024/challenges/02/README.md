# [Reto #02: 🖼️ Enmarcando nombres](https://adventjs.dev/es/challenges/2024/1)

**Santa Claus 🎅** quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

**Reglas:**
<ul style="color: rgb(253 246 178)">
  <li>Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.</li>
  <li>Cada nombre debe estar en una línea, alineado a la izquierda.</li>
  <li>El marco está construido con * y tiene un borde de una línea de ancho.</li>
  <li>La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.</li>
</ul>

Ejemplo de funcionamiento:

```js
createFrame(['midu', 'madeval', 'educalvolpz'])

// Resultado esperado:
***************
* midu        *
* madeval     *
* educalvolpz *
***************

createFrame(['midu'])

// Resultado esperado:
********
* midu *
********

createFrame(['a', 'bb', 'ccc'])

// Resultado esperado:
*******
* a   *
* bb  *
* ccc *
*******

createFrame(['a', 'bb', 'ccc', 'dddd'])
```
