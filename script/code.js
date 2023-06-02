// function addTask(){
//     let li = document.createElement("li");
//     let inputValue = document.querySelector("#input").value;
//     let t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     if (inputValue === ''){
//         alert("You must write something!");
//     } else{
//         document.querySelector("#list").appendChild(li);
//     }
// }

const add = document.querySelector('#add')
const sort = document.querySelector("#sort")
const input = document.querySelector("#input")
const output = document.querySelector("#list")
let array = []

add.addEventListener("click", (e)=> {
    e.preventDefault()
    if(input.value) {
        array.push(input.value)
        input.value = ""
    } else {
        input.style = "outline: 3px solid red;"
    }
    
})


localStorage.setItem("names", JSON.stringify(array))
add.addEventListener("click", (event)=> {
    event.preventDefault()
    list.innerHTML = "";
    array.forEach( (name)=> {
        list.innerHTML += `
        <li><input type="checkbox">
        ${name}
        <button class="btn3">x</button>
        </li>
        `
    })
})









