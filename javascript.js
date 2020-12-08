document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').onsubmit = function () {
        const task = document.querySelector('#task')

        const list = document.createElement('tr')
        // list.innerHTML = document.querySelector("#new-task").value
        const subject = document.createElement('td')
        const sub = document.querySelector("#sub").value
        const semester = document.createElement('td')
        const sem = document.querySelector("#sem").value
        const grade = document.createElement('td')
        const gpa = document.querySelector("#gpa").value
        const credit = document.createElement('td')
        const cre = document.querySelector("#cre").value
        
        //todo.innerHTML = sem +'  '+ sub +'  '+ gpa
        subject.innerHTML = sub
        semester.innerHTML = sem
        grade.innerHTML = gpa
        credit.innerHTML = cre
        const deleteButton = document.createElement('button')
        deleteButton.className = 'btn btn-danger m-2 h-2'
        deleteButton.innerHTML = 'x'
        deleteButton.onclick = function () {
            task.removeChild(list)
        }
        if (sub != '' && sem != '' && gpa != '' ) {
            list.append(semester)
            list.append(subject)
            list.append(grade)
            list.append(credit)
            list.append(deleteButton)
            task.append(list)
            //reset input
            document.querySelector("#sub").value = ""
            document.querySelector("#sem").value = ""
            document.querySelector("#gpa").value = ""
            document.querySelector("#cre").value = ""
        }
        else{
            alert('ใส่ข้อมูลด้วยจ้า')
        }

        //calculate gpa
        const real_gpa = 



        return false
    }
})