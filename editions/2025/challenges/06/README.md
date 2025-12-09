# [Reto #6: 🧤 Emparejando guantes](https://adventjs.dev/es/challenges/2025/6)
![Reto #6: 🧤 Emparejando guantes](https://adventjs.dev/backgrounds/6.webp)

---

En el taller de Santa, los elfos han encontrado **una montaña de guantes mágicos** totalmente desordenados.
Cada guante viene descrito por dos valores:

* `hand`: indica si es un guante izquierdo (`L`) o derecho (`R`)
* `color`: el color del guante (string)

Tu tarea es ayudarles a **emparejar guantes**:
Un par válido es un guante izquierdo y uno derecho **del mismo color**.

Debes devolver **una lista con los colores de todos los pares encontrados**.
Ten en cuenta que **puede haber varios pares del mismo color**.
El orden se determina según el momento en que se pueda formar el par.

---

## 🧩 Ejemplos

```js
const gloves = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' },
  { hand: 'L', color: 'green' }
]

matchGloves(gloves)
// ["red", "green"]


const gloves2 = [
  { hand: 'L', color: 'gold' },
  { hand: 'R', color: 'gold' },
  { hand: 'L', color: 'gold' },
  { hand: 'L', color: 'gold' },
  { hand: 'R', color: 'gold' }
]

matchGloves(gloves2)
// ["gold", "gold"]


const gloves3 = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' }
]

matchGloves(gloves3)
// []


const gloves4 = [
  { hand: 'L', color: 'green' },
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'red' },
  { hand: 'R', color: 'green' }
]

matchGloves(gloves4)
// ["red", "green"]
```
