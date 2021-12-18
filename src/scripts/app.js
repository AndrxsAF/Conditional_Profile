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
    console.log(toPrint)
    console.log("impreso")
}

const handleClick = (event) => {
    let additem = texto.value
    lista.push(additem)
    addToDo(lista)
    console.log(lista)
    console.log("guardado item")
}

const eliminar = (numero) => {
    // eliminar numero de la lista con un slice, buscar la manera de poder comparar el length de la lista con el index que hay que eliminar
    lista.splice( numero, 1 )
    addToDo(lista)
}

boton.addEventListener("click", handleClick)