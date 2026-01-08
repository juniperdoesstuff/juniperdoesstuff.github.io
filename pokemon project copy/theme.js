const root = document.documentElement

const stored = localStorage.getItem('data-theme')
console.log(stored)

root.setAttribute('theme', stored)

const togglebtn = document.getElementById('togglebtn')

togglebtn.onclick = function(){
    root.setAttribute('theme', root.getAttribute('theme') == 'dark' ? 'light' : 'dark')
    console.log(root.getAttribute('theme'))
    localStorage.setItem('data-theme', root.getAttribute('theme'))
}