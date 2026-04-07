box1 = document.getElementById('box1')
box2 = document.getElementById('box2')

box1.addEventListener('click', e=>{
    box1.style.animationPlayState = 'running'
    box2.style.animationPlayState = 'paused'
})

box2.addEventListener('click', e=>{
    box2.style.animationPlayState = 'running'
    box1.style.animationPlayState = 'paused'
})