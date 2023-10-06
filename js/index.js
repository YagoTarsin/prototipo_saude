const input = document.querySelector('.login_usuario')
const form = document.querySelector('.form')


const handleSubmit = (e) =>{
    e.preventDefault()

    localStorage.setItem('usuario', input.value)
    window.location = 'pages/corretor.html'
}

form.addEventListener('submit', handleSubmit)