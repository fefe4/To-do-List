import deploySideBar from "./deploysidebar";
import popupProject from "./popUpProject";
// import displaytasksinsideaproject from "./displaytasksinproject"
deploySideBar ();
popupProject ();
// displaytasksinsideaproject ();


let allTasks = [];

let x = JSON.parse(localStorage.getItem(0))
console.log (x);



for(var i in localStorage)
{
    console.log(localStorage[i]);
}

//test for firefox 3.6 see if it works
//with this way of iterating it
for(var i=0, len=localStorage.length; i<len; i++) {
    var key = localStorage.key(i);
    var value = localStorage[key];
    console.log(key + " => " + value);
    x = JSON.parse(value);
    console.log (x);
    const container = document.getElementById ("taskContainer");
    const newtask = document.createElement ('div');
    newtask.classList.add ("task");
    //checkbox
    const taskcheckbox = document.createElement ('input');
    taskcheckbox.type = "checkbox";
    //task title

    // console.log (allTasks[task].title)
    const tasktitle = document.createElement ('p');
    tasktitle.textContent = x.title;
    //task description
    const flag = document.createElement ('div');
    flag.classList.add ("arrowyellow");
    newtask.appendChild (taskcheckbox);
    newtask.appendChild (tasktitle);
    newtask.appendChild (flag);
    container.appendChild (newtask);
}

function Task (title, description, notes) {
  this.title = title;
  this.description = description;
  this.notes = notes;
  // this.date = date;
  // this.Info = function (){
    return title + ", " + description + ". " + notes + "." ;
}

const addTasktotheProject = function (newTask) {
  const title = document.getElementById ("tasknameinput").value;
  const description = document.getElementById ("descriptioninput").value;
  const notes = document.getElementById ("notes").value;
  // const date = document.getElementById ("date").value;
  // const checkbox = document.getElementById("checkbox").value;
  newTask = new Task(title, description, notes);
  allTasks.push(newTask);
  localStorage.setItem (i, JSON.stringify(newTask))
  i++
}



const addtaskbtn = document.getElementById ("addtaskbutton")
addtaskbtn.addEventListener ('click', ()=>{
  addTasktotheProject ();
});

function addtasktodisplay () {
  const container = document.getElementById ("taskContainer");
  const newtask = document.createElement ('div');
  newtask.classList.add ("task");
  
  const taskcheckbox = document.createElement ('input');
  taskcheckbox.type = "checkbox";
  
  const tasktitle = document.createElement ('p');
  tasktitle.textContent = a.value;

  const flag = document.createElement ('div');
  flag.classList.add ("arrowyellow");
  newtask.appendChild (taskcheckbox);
  newtask.appendChild (tasktitle);
  newtask.appendChild (flag);
  container.appendChild (newtask);
  
}

const today = document.getElementById ("today") 
today.addEventListener ('click', () => {
  displayalltasks();
});

function displayalltasks () {

let task = 0;
for (task in allTasks) {
  const container = document.getElementById ("taskContainer");
  const newtask = document.createElement ('div');
  newtask.classList.add ("task");
  //checkbox
  const taskcheckbox = document.createElement ('input');
  taskcheckbox.type = "checkbox";
  //task title
  console.log (allTasks[task].title)
  const tasktitle = document.createElement ('p');
  tasktitle.textContent = allTasks[task].title;
  //task description
  const flag = document.createElement ('div');
  flag.classList.add ("arrowyellow");
  newtask.appendChild (taskcheckbox);
  newtask.appendChild (tasktitle);
  newtask.appendChild (flag);
  container.appendChild (newtask);
  task++;
}
}
// const today =document.getElementById ("Today")
// today.addEventListener ('click', () =>{
//   displaytasksinsideaproject ();
// }) 
  

// function addtasktodisplay () {
//   const container = document.getElementById ("taskContainer");
//   const newtask = document.createElement ('div');
//   newtask.classList.add ("task");
  
//   const taskcheckbox = document.createElement ('input');
//   taskcheckbox.type = "checkbox";
  
//   const tasktitle = document.createElement ('p');
//   tasktitle.textContent = a.value;

//   const flag = document.createElement ('div');
//   flag.classList.add ("arrowyellow");
//   newtask.appendChild (taskcheckbox);
//   newtask.appendChild (tasktitle);
//   newtask.appendChild (flag);
//   container.appendChild (newtask);
  
// }

