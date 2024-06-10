import { store } from "../index.js"


function Todo(item) {
    item.isDone = false

    const div = document.createElement("div")
    div.classList.add("flex_div")
    let li = document.createElement('li')
    li.classList.add("lis_mr")
    li.innerHTML = `${item.description} <br/> ${item.deadline}`

    const checkbox = document.createElement("input")
    checkbox.classList.add("checkbox")

    checkbox.onchange = () => {
        if(checkbox.checked) {
            item.isDone = true
            li.classList.add("line_through")
        } else {
            item.isDone = !item.isDone
            li.classList.remove("line_through")
        }
    }

    let edit_img = document.createElement("img")
    edit_img.className = "edit"
    edit_img.src ="edit.png"

    let remove_img = document.createElement("img")
    remove_img.className = "remove"
    remove_img.src = "remove.png"

    edit_img.onclick = () => {
        let edit_prompt = prompt("edit your text")

        li.innerHTML = `${edit_prompt} <br/> ${item.deadline}`
        item.description = edit_prompt
    }


    remove_img.onclick = () => {

        const idx = store.todos.findIndex(todo => todo.id === item.id);

        if (idx !== -1) {
            store.todos.splice(idx, 1);
            div.remove();
        }
    };
    

    checkbox.type = "checkbox"
    
    let rm_ed_div = document.createElement("div")
    rm_ed_div.classList.add("end_imgs")

    
    rm_ed_div.append(edit_img, remove_img)

    div.append(checkbox, li, rm_ed_div)
    

    return div
}

export {Todo}