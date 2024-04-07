// let car = {
//     color: 'red',
//     marca: 'Lada',
//     model: 'sidan'
// };
// let man = {
//     skin: 'negr',
//     status: 'slave',
//     IQ: '2',
//     name: 'Kirill',
//     place: 'Krocus City Holl',
//     car: car
// };

const add = document.getElementById('todoat');
const input = document.getElementById('todoinput');
const list = document.getElementById('todolist');
let count = 0;

add.onclick = function(){
    let newtask = input.value;
    if(newtask == ''){
        alert('Введите задачу');
    }
    else if(newtask != ''){
        if(count < 16){
            addlist(newtask)
        }
        else if(count == 16){
            alert('у вас закончилось место')
        }
    }
    count = count + 1;
    input.value = " ";
}
function addlist(task){
    let newitem = document.createElement('li');
    let tasktext = document.createElement('span');
    newitem.classList.add('item');
    list.appendChild(newitem);
    newitem.appendChild(tasktext);
    tasktext.textContent = task;
    

    let dellbut = document.createElement('button');
    dellbut.textContent = 'dellet';
    newitem.appendChild(dellbut)

    let okbut = document.createElement('button');
    okbut.textContent = 'sucsees';
    newitem.appendChild(okbut)

    dellbut.onclick = function(){
        newitem.classList.add('itemn')
        newitem.removeChild(dellbut)
        newitem.removeChild(okbut)
    }

    okbut.onclick = function(){
        newitem.classList.add('itemy')
        newitem.removeChild(dellbut)
        newitem.removeChild(okbut)
    }
    Savestorage()
}


function Savestorage(){
    let massyv = [];
    document.querySelectorAll('li').forEach(task => {
        let tasktext = task.querySelector('span').textContent;
        massyv.push({
            content: tasktext
        });
        localStorage.setItem('massyv', JSON.stringify(massyv))
    })
}

document.addEventListener('DOMContentLoaded', function() {
    let massyv = JSON.parse(localStorage.getItem('massyv'));
    if (massyv) {
        massyv.forEach(function(task) {
        addlist(task.content);
        });
    }
});