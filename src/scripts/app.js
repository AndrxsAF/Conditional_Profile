const todo = document.querySelector("#todo")
const texto = document.querySelector("#todo-add")
const boton = document.querySelector("#todo-add-button")

let lista = []

const addToDo = (arr) => {
    let toPrint = ''
    for (i in arr) {
        toPrint += `<li>${arr[i]} <button onclick="eliminar(${i})" id="todo-${i}">Eliminar</button></i>`
    }
    todo.innerHTML = toPrint
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