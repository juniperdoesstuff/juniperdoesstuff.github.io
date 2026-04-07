pause = document.getElementById('btn')
unpause = document.getElementById('pause')
box = document.getElementsByClassName('box')[0]

box.classList.add('move')

pause.addEventListener('click', e=>{
    box.style.animationPlayState = 'paused'
})

unpause.addEventListener('click', e=>{
    box.style.animationPlayState = 'running'
}
)