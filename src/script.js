// document.addEventListener("DOMContentLoaded",()=>{
//     // console.log("hello");

// const task=document.getElementById("task")
// const addTaskbtn=document.getElementById("btn")
// const list=document.getElementById("todo-list")

// let tasks=JSON.parse(localStorage.getItem('tasks'))  || []

// tasks.forEach(task => {
//     renderTask(task)
// });



// addTaskbtn.addEventListener("click",()=>{
//     const taskText=task.value.trim();
//     if(taskText=="")return
//     // console.log(task.value)

//     const newTask={
//         id:Date.now(),
//         text:taskText,
//         completed: false,

//     };

//     tasks.push(newTask);
//     saveTask();
//     task.value=""
//     console.log(tasks);
// });

// function saveTask(){
//     localStorage.setItem('tasks',JSON.stringify(tasks))
// }

// function renderTask(task){
//     // console.log(task.text)
//     const li=document.createElement('li')
//     li.setAttribute("data-id",task.id)

//     li.innerHTML=`<span>${task.text}</span>
//     <button>delete</button>`;
//     console.log(li)
//     list.appendChild(li);   
// }

// })


const city=document.getElementById("task");
const search=document.getElementById("btn")

search.addEventListener("click",()=>{
    getWeatherdata(city.value)
})

const apikey="d9c3663098e8eb461aeac4c772b8b44a"
const api_url="https://api.openweathermap.org/data/2.5/weather?units=metric &q=";

async function getWeatherdata(city){

    let response=await fetch(api_url+city+`&appid=${apikey}`)

    if(!response.ok){
        throw new Error(`response status:${response.status}`)
    }

    let data=await response.json()

    console.log(data);
    
}       


