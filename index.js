var elementos_duvida = document.querySelectorAll('.duvida')

elementos_duvida.forEach(function(duvida)  {
    duvida.addEventListener('click', function() {
        duvida.classList.toggle('ativa')
    })
})

