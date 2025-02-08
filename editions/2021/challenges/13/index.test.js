import wrapGifts from './index.js';

console.log(wrapGifts(['📷', '⚽️']));
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

console.log(wrapGifts(['🏈🎸', '🎮🧸']));
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

console.log(wrapGifts(['📷']));
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/
