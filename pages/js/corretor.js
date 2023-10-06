const usuario = document.querySelector('.usuario')

window.onload = () =>{
    usuario.innerHTML = 'Bem vindo ' + localStorage.getItem('usuario') + '!'
}