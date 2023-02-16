// Environment Variables

    var environment = "P"; // Sets environment to Testing or Production
    var forceHour = 11; // for testing forces the time to what is contained in the variable
    
    // var planner_storage = []
    const day = moment().format('ddd');
    var WeekPlan ={Mon:[1,2,3],Tue:[4,5,6],Wed:[7,8,9],Thu:[10,11,12],Fri:[13,14,15],Sat:[],Sun:[]}; //Fictitious data
    var Token = {Day:"Mon",Today:0,Selection:0}
    Token.Day = day;
    switch(day){
        case 'Mon':
            Token.Today = 1;
            Token.Selected = 1;
            break;
        case 'Tue':
            Token.Today = 2;
            Token.Selected = 2;
            break;
        case 'Wed':
            Token.Today = 3;
            Token.Selected = 3;
            break;
        case 'Thu':
            Token.Today = 4;
            Token.Selected = 4;
            break;
        case 'Fri':
            Token.Today = 5;
            Token.Selected = 6;
            break;
        default:
            break
    };

    // Set Environment Test / Production Variables. 
    if (environment ==="T") {
        var currentHour = forceHour;
        Token.Day = 'Wed';
        console.log("Current Hour: "+currentHour);
    } else {
        var currentHour = moment().format('H'); // Get the Current Hour
        console.log("Current Hour: "+currentHour);
    };

function setFutureAttributes(){
    textarea9El.attr ('class','col-md-10 textarea future');
    textarea10El.attr ('class','col-md-10 textarea future');
    textarea11El.attr ('class','col-md-10 textarea future');
    textarea12El.attr ('class','col-md-10 textarea future');
    textarea13El.attr ('class','col-md-10 textarea future');
    textarea14El.attr ('class','col-md-10 textarea future');
    textarea15El.attr ('class','col-md-10 textarea future');
    textarea16El.attr ('class','col-md-10 textarea future');
    textarea17El.attr ('class','col-md-10 textarea future');
}
function setPastAttributes(){
    textarea9El.attr ('class','col-md-10 textarea past');
    textarea10El.attr ('class','col-md-10 textarea past');
    textarea11El.attr ('class','col-md-10 textarea past');
    textarea12El.attr ('class','col-md-10 textarea past');
    textarea13El.attr ('class','col-md-10 textarea past');
    textarea14El.attr ('class','col-md-10 textarea past');
    textarea15El.attr ('class','col-md-10 textarea past');
    textarea16El.attr ('class','col-md-10 textarea past');
    textarea17El.attr ('class','col-md-10 textarea past');        
}



function setAttributes(hour){
    var attributes =['col-md-10 textarea present','col-md-10 textarea future','col-md-10 textarea past']; 
   if (Token.Selected > Token.Today){
        setFutureAttributes();

    } else if (Token.Selected < Token.Today){
        setPastAttributes();
    } else{
        for(i=9;i <18;i++){
            switch (i) {
                case 9:
                    if (i == hour){
                        textarea9El.attr ('class',attributes[0]);    
                    }else if(i > hour){
                        textarea9El.attr ('class',attributes[1]);
                    }else{
                        textarea9El.attr ('class',attributes[2]);
                    }
                    break; 
                case 10:
                    if (i == hour){
                        textarea10El.attr ('class',attributes[0]);    
                    }else if(i > hour){
                        textarea10El.attr ('class',attributes[1]);
                    }else{
                        textarea10El.attr ('class',attributes[2]);
                    }
                    break;
                case 11:
                    if (i == hour){
                        textarea11El.attr ('class',attributes[0]);    
                    }else if(i > hour){
                        textarea11El.attr ('class',attributes[1]);
                    }else{
                        textarea11El.attr ('class',attributes[2]);
                    }
                    break
                case 12:
                    if (i == hour){
                        textarea12El.attr ('class',attributes[0]);    
                    }else if(i > hour){
                        textarea12El.attr ('class',attributes[1]);
                    }else{
                        textarea12El.attr ('class',attributes[2]);
                    }
                    break
                case 13:
                    if (i == hour){
                        textarea13El.attr ('class',attributes[0]);    
                    }else if(i > hour){
                        textarea13El.attr ('class',attributes[1]);
                    }else{
                        textarea13El.attr ('class',attributes[2]);
                    }
                    break
                case 14:
                    if (i == hour){
                        textarea14El.attr ('class',attributes[0]);    
                    }else if(i > hour){
                        textarea14El.attr ('class',attributes[1]);
                    }else{
                        textarea14El.attr ('class',attributes[2]);
                    }                break
                case 15:
                    if (i == hour){
                        textarea15El.attr ('class',attributes[0]);    
                    }else if(i > hour){
                        textarea15El.attr ('class',attributes[1]);
                    }else{
                        textarea15El.attr ('class',attributes[2]);
                    }
                    break
                case 16:
                    if (i == hour){
                        textarea16El.attr ('class',attributes[0]);    
                    }else if(i > hour){
                        textarea16El.attr ('class',attributes[1]);
                    }else{
                        textarea16El.attr ('class',attributes[2]);
                    }
                case 17:
                    if (i == hour){
                        textarea17El.attr ('class',attributes[0]);    
                    }else if(i > hour){
                        textarea17El.attr ('class',attributes[1]);
                    }else{
                        textarea17El.attr ('class',attributes[2]);
                    }
                    break;
                default:

                    break
                }      
            }
        }
};

function get_local_storage(){
    var prevStorage = localStorage.getItem("Planner");
    if (prevStorage != null){
        Planner = JSON.parse(prevStorage);
        getdayArray=Planner[Token.Day];
        console.log(WeekPlan.Mon);

        text9El.val(getdayArray[0]);
        text10El.val(getdayArray[1]);
        text11El.val(getdayArray[2]);
        text12El.val(getdayArray[3]);
        text13El.val(getdayArray[4]);
        text14El.val(getdayArray[5]);
        text15El.val(getdayArray[6]);
        text16El.val(getdayArray[7]);
        text17El.val(getdayArray[8]);
    }
};
function set_local_storage(){
    setDayArray = WeekPlan[Token.Day];

    setDayArray[0] = text9El.val();
    setDayArray[1] = text10El.val();
    setDayArray[2] = text11El.val();
    setDayArray[3] = text12El.val();
    setDayArray[4] = text13El.val();
    setDayArray[5] = text14El.val();
    setDayArray[6] = text15El.val();
    setDayArray[7] = text16El.val();
    setDayArray[8] = text17El.val();
    
    //WeekPlan[Token.Day] = setDayArray
    // store updated planner details
    localStorage.setItem("Planner", JSON.stringify(WeekPlan));
};

// Add the Current Time and Date to the Page.
    var currentDayEl = $('#currentDay'); // Access the CurrentDay ID 

    // I have added this IF statement, if the time is > 5pm it displays a message "We are now Planning for Tommorow Now!" in addition to the CURRENT time and Date. OTHERWISE it is between 9am - 5pm and displays JUST the Time and Date.
    var textarea9El =  $('#9');  // Access 9  am
    var textarea10El = $('#10'); // Access 10 am
    var textarea11El = $('#11'); // Access 11 am
    var textarea12El = $('#12'); // Access 12 am
    var textarea13El = $('#13'); // Access 1  pm
    var textarea14El = $('#14'); // Access 2  pm
    var textarea15El = $('#15'); // Access 3  pm
    var textarea16El = $('#16'); // Access 4  pm
    var textarea17El = $('#17'); // Access 5  pm



    if (currentHour > 17 || currentHour < 9) {
        currentDayEl.text ("We are now forward Planning! Current Date & Time: "+moment().format('LLLL')); // Targets the CurrentDay Element and replaces the Text with the Time and Date in the format Day, Month Date, Year Time (AM/PM)
        if (environment="T") {console.log("Not Between 9am - 5pm e.g. NEXT DAY")}; 
        setFutureAttributes();
        
    } else if (currentHour > 17 || currentHour < 9){
        currentDayEl.text ("We are now amending old Planning! Current Date & Time: "+moment().format('LLLL')); // Targets the CurrentDay Element and replaces the Text with the Time and Date in the format Day, Month Date, Year Time (AM/PM)
        if (environment="T") {console.log("Not Between 9am - 5pm e.g. NEXT DAY")}; 
        setPastAttributes();

    } else {
        currentDayEl.text (moment().format('LLLL')); // Targets the CurrentDay Element and replaces the Text with the Time and Date in the format Day, Month Date, Year Time (AM/PM)
        if (environment="T") {console.log("9am")};
            setAttributes(currentHour);  
    };

// Access the Text for each Time Slot
    var text9El =  $('#t9');  // Access 9  am
    var text10El = $('#t10'); // Access 10 am
    var text11El = $('#t11'); // Access 11 am
    var text12El = $('#t12'); // Access 12 am
    var text13El = $('#t13'); // Access 1  pm
    var text14El = $('#t14'); // Access 2  pm
    var text15El = $('#t15'); // Access 3  pm
    var text16El = $('#t16'); // Access 4  pm
    var text17El = $('#t17'); // Access 5  pm

// Get stored text from local storage and display
get_local_storage();

//Save all planned activities to local storage
var saveDayButton = document.querySelector("#saveAll");
saveDayButton.addEventListener("click",function(event) {
    event.preventDefault(); // Prevent default behaviour
    
    //Only set storage if it is a working day
    if (Token.Day != "Sat" || Token.Day != "Sun"){
        set_local_storage();
    }else{
        console.log("Sorry, can't log data for Saturday or Sunday")
    }
});
// Adding Reset Functionality
var resetDayButton = document.querySelector("#reset");
resetDayButton.addEventListener("click", function(event) {
    event.preventDefault();
    setDayArray = WeekPlan[Token.Day];

    for (i=0; i < 9; i++){
        setDayArray[i]='';
    }
    localStorage.setItem("Planner", JSON.stringify(WeekPlan));
    get_local_storage()
});
// Set the day to Monday and load data
var mondayButton = document.querySelector("#monday");
mondayButton.addEventListener("click", function(event) {
    event.preventDefault();
    Token.Day = 'Mon';
    Token.Selected = 1;
    get_local_storage()
    if (Token.Selected > Token.Today){
        setFutureAttributes();
    } else if (Token.Selected < Token.Today){
        setPastAttributes();
    } else {
        setAttributes(currentHour);
    }

});
// Set the day to Tuesday and load data
var tuesdayButton = document.querySelector("#tuesday");
tuesdayButton.addEventListener("click", function(event) {
    event.preventDefault();
    Token.Day = 'Tue';
    Token.Selected = 2;
    get_local_storage()
    if (Token.Selected > Token.Today){
        setFutureAttributes();
    } else if (Token.Selected < Token.Today){
        setPastAttributes();
    } else {
        setAttributes(currentHour);
    }
});
// Set the day to Monday and load data
var wednesdayButton = document.querySelector("#wednesday");
wednesdayButton.addEventListener("click", function(event) {
    event.preventDefault();
    Token.Day = 'Wed';
    Token.Selected = 3;
    get_local_storage()
    
    if (Token.Selected > Token.Today){
        setFutureAttributes();
    } else if (Token.Selected < Token.Today){
        setPastAttributes();
    } else {
        setAttributes(currentHour);
    }
});
// Set the day to Monday and load data
var thursdayButton = document.querySelector("#thursday");
thursdayButton.addEventListener("click", function(event) {
    event.preventDefault();
    Token.Day = 'Thu';
    Token.Selected = 4;
    get_local_storage()
    
    if (Token.Selected > Token.Today){
        setFutureAttributes();
    } else if (Token.Selected < Token.Today){
        setPastAttributes();
    } else {
        setAttributes(currentHour);
    }
});
// Set the day to Monday and load data
var fridayButton = document.querySelector("#friday");
fridayButton.addEventListener("click", function(event) {
    event.preventDefault();
    Token.Day = 'Fri';
    Token.Selected = 5;
    get_local_storage()
    
    if (Token.Selected > Token.Today){
        setFutureAttributes();
    } else if (Token.Selected < Token.Today){
        setPastAttributes();
    } else {
        setAttributes(currentHour);
    }
});

var todoButton = document.querySelector("#todoBtn");
todoButton.addEventListener("click", function(event) {
    $("#planModal").modal('show');
    
});
//To do variables
var todoTask = document.querySelector("#TodoTask");
var todoDate = document.querySelector("#TodoDate");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");

var todoCountSpan = document.querySelector("#todo-count");
var todos = [];
init();
function renderTodos() {
    // Clear todoList element and update todoCountSpan
    console.log(todoList);
    
    todoList.innerHTML = "";
    //todoCountSpan.textContent = todos.length;
  
    // Render a new li for each todo
    for (var i = 0; i < todos.length; i++) {
      var todo = todos[i];
    
      var li = document.createElement('li');
      li.textContent = todo;
      li.setAttribute("data-index", i);
      li.setAttribute("background","green");
  
      var button = document.createElement('button');
      
      button.textContent = "C";
      // button.setAttribute("style","background:blue;");  use .style.background = "blue" etc
      button.setAttribute("style","border-radius:15px;background:red;");
      
      li.append(button);
      todoList.append(li);
    }
  }
  function init() {
    // Get stored todos from localStorage
    // Parsing the JSON string to an object
    var storedTodos = JSON.parse(localStorage.getItem("todos"));
  
    // If todos were retrieved from localStorage, update the todos array to it
    if (storedTodos !== null) {
      todos = storedTodos;
    }
  
    // Render todos to the DOM
    renderTodos();
  }

  function storeTodos() {
    // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem("todos", JSON.stringify(todos));
  }

// When form is submitted...(create a todo item)
todoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(event);
    var todoTaskText = todoTask.value.trim();
    var todoDateText = todoDate.value.trim();
    var todoText = todoDateText+"|"+todoTaskText+" "
    // Return from function early if submitted todoText is blank
    if (todoText === "") {
      return;
    }
  
    // Add new todoText to todos array, clear the input
    todos.push(todoText);
    todoTask.value = "";
    todoDate.value = "";

    // Store updated todos in localStorage, re-render the list
    storeTodos();
    renderTodos();

})

// Remove a completed todo item...
todoList.addEventListener("click", function(event) {
    var element = event.target;
  
    // If that element is a button...
    if (element.matches("button") === true) {
      // Get its data-index value and remove the todo element from the list
      var index = element.parentElement.getAttribute("data-index");
      todos.splice(index, 1);

      // Store updated todos in localStorage, re-render the list
      storeTodos();
      renderTodos();
    }
  });
  
// Datepicker widget
$(function () {
     $('#TodoDate').datepicker({
       changeMonth: true,
       changeYear: true,
     });
});
// // Autocomplete widget
// $(function () {
//     var TodoTask = [
//       'Bootstrap',
//       'C',
//       'C++',
//       'CSS',
//       'Express.js',
//       'Git',
//       'HTML',
//       'Java',
//       'JavaScript',
//       'jQuery',
//       'JSON',
//       'MySQL',
//       'Node.js',
//       'NoSQL',
//       'PHP',
//       'Python',
//       'React',
//       'Ruby',
//     ];
//     $('#TodoTask').autocomplete({
//       source: TodoTask,
//     });
//   });  