import { Option } from "./components/Option.js"
import { Todo } from "./components/Todo.js"
import { reload, submit } from "./lib/utils.js"

const forms = Array.from(document.forms)
const select = document.getElementById('categs')

const work = document.querySelector(".work ul")
const personal = document.querySelector(".personal ul")
const study = document.querySelector(".study ul")

const option = document.querySelector(".form-select")

export const store = {
    todos: [],
    categories: []
}

forms.forEach((form) => {
    form.onsubmit = (e) => {
        e.preventDefault();

        submit(e.target, store[form.name])

        if(form.name === 'categories') {
            reload(store[form.name], Option, select)
        } else if (form.name === 'todos'){
            if(option.value === "work") {
                reload(store[form.name].filter(todo => todo.category === "work"), Todo, work)
            } else if (option.value === "personal") {
                reload(store[form.name].filter(todo => todo.category === "personal"), Todo, personal)
            } else if (option.value === "study") {
                reload(store[form.name].filter(todo => todo.category === "study"), Todo, study)
            } else {
                alert("category = work, personal, study")
            }
        }


        form.reset()
    }
})

console.log(store.todos);


const aside = document.querySelector("aside")
const menuBtn = document.querySelector(".menubtn")
const closeBtn = document.querySelector(".close")
menuBtn.onclick = () => {
    aside.classList.add("menu_active")
}

closeBtn.onclick = () => {
    aside.classList.remove("menu_active")
}