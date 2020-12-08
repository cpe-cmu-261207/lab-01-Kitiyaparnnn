document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').onsubmit = function () {
        const task = document.querySelector('#task')

        const list = document.createElement('p')
        // list.innerHTML = document.querySelector("#new-task").value
        const todo = document.createElement('span')
        const sub = document.querySelector("#sub").value
        const sem = document.querySelector("#sem").value
        const gpa = document.querySelector("#gpa").value
        
        todo.innerHTML = sub +' '+ sem +' '+ gpa
        const deleteButton = document.createElement('button')
        deleteButton.className = 'btn btn-danger m-2 h-'
        deleteButton.innerHTML = 'x'
        deleteButton.onclick = function () {
            task.removeChild(list)
        }
        if (sub != '' && sem != '' && gpa != '' ) {
            list.append(todo)
            list.append(deleteButton)
            task.append(list)
        }
        else{
            alert('ใส่ข้อมูลด้วยจ้า')
        }

        //reset input
        //document.querySelector("#new-task").value = ""
        return false
    }
})