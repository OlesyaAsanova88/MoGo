const board = document.querySelector('#board')
const colors = ['green', 'yellow', 'orange', 'seafoam', 'indigo', 'fuschia', 'violet', 'magenta', 'forest','turquoise', 'marine', 'red']
const SQUARES_NAMBER = 500

for (let i = 0; i < SQUARES_NAMBER; i++) {
   const square = document.createElement('div')
   square.classList.add('square')

   square.addEventListener('mouseover', () => setColor(square))

   square.addEventListener('mouseleave', () => removeColor(square))

   board.append(square)
}

function setColor(element) {
   const color = getRandomColor() 
   element.style.backgroundColor = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` 
}

function removeColor(element) {
   element.style.backgroundColor = '#3f3d3d'
   element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}