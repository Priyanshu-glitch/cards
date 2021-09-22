const panels = document.querySelectorAll('.panel');

panels.forEach((panels) => {
    panels.addEventListener('click' , () => {
        removeActiveclasses()
        panels.classList.add('active')
    })
})

function removeActiveclasses(){
    panels.forEach(panels => {
       panels.classList.remove('active')
    })
}