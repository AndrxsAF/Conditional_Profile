const todo = document.querySelector("#todo")
const texto = document.querySelector("#todo-add")
const boton = document.querySelector("#todo-add-button")

let lista = []

const addToDo = (arr) => {
    let toPrint = ''
    for (i in arr) {
        toPrint += `<li class="list-group-item d-flex justify-content-between align-items-center bg-light display-hover"><p class="m-0 text-wrap todo-item">${arr[i]}</p><button type="button" class="btn-close display-custom" data-bs-dismiss="alert" onclick="eliminar(${i})" id="todo-${i} aria-label="Close"></button></li>`
    }
    if (arr.length == 0) {
        todo.innerHTML = toPrint + `<li class="list-group-item d-flex justify-content-between align-items-center bg-light custom-left-init"><p class="m-0 text-wrap todo-item">No task, add a task.</p></li>`
    } else {
        todo.innerHTML = toPrint + `<li class="list-group-item d-flex justify-content-between align-items-center bg-light custom-left"><p class="m-0 text-wrap todo-item">${(arr.length)} items left.</p></li>`
    }
    
}

const handleClick = (event) => {
    event.preventDefault()
    let additem = texto.value
    lista.push(additem)
    addToDo(lista)
    texto.value = ""
}

const eliminar = (numero) => {
    lista.splice( numero, 1 )
    addToDo(lista)
}

boton.addEventListener("click", handleClick)