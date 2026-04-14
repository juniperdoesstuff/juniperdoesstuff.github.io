button = document.getElementById('pauseplay')
uptr = document.getElementById('uptriangle')
dntr = document.getElementById('downtriangle')

button.addEventListener('click', e=>{
    if (uptr.style.animationPlayState == 'running'){
        uptr.style.animationPlayState = 'paused'
        dntr.style.animationPlayState = 'paused'}

    else{
        uptr.style.animationPlayState = 'running'
        dntr.style.animationPlayState = 'running'
    }
})