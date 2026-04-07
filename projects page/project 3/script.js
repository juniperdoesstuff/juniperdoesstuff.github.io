btn = document.getElementById('btn')
box = document.getElementsByClassName('box')
btn2 = document.getElementById('btn2')
btn3 = document.getElementById('btn3')

square = document.getElementById('square')
triangle = document.getElementById('triangle')
circle = document.getElementById('circle')
oval = document.getElementById('oval')

console.log(box)

btn.addEventListener('click', (e) =>{
    box[0].classList.add('rotate')
})

btn2.addEventListener('click', (e) =>{
    box[0].classList.add('colorchange')
})


console.log(btn3)

btn3.addEventListener('click', (e) =>{
    square.classList.add('scale')
    circle.classList.add('scale')
    oval.classList.add('scale')
    triangle.classList.add('scale')
})