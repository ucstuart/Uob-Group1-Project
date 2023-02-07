// Environment Variables

    var environment = "T"; // Sets environment to Testing or Production
    var forceHour = 11; // for testing forces the time to what is contained in the variable

// Set Environment Test / Production Variables. 

    if (environment ==="T") {
        var currentHour = forceHour;
        console.log("Current Hour: "+currentHour);
    } else {
        var currentHour = moment().format('H'); // Get the Current Hour
        console.log("Current Hour: "+currentHour);
    }

// Clear the localStorage to Start - USE IF NEEDED WHEN TESTING

// localStorage.clear();


// Add the Current Time and Date to the Page.

    var currentDayEl = $('#currentDay'); // Access the CurrentDay ID 

    // I have added this IF statement, if the time is > 5pm it displays a message "We are now Planning for Tommorow Now!" in addition to the CURRENT time and Date. OTHERWISE it is between 9am - 5pm and displays JUST the Time and Date.

    if (currentHour > 17 || currentHour < 9) {
        currentDayEl.text ("We are now Planning For Tommorow Now! Current Date & Time: "+moment().format('LLLL')); // Targets the CurrentDay Element and replaces the Text with the Time and Date in the format Day, Month Date, Year Time (AM/PM)
    } else {
        currentDayEl.text (moment().format('LLLL')); // Targets the CurrentDay Element and replaces the Text with the Time and Date in the format Day, Month Date, Year Time (AM/PM)
    }

    

//

// Work out where we are during the day and alter the CSS to highlight sections differently (Grey Prior, Red Current, Green Future)


    var textarea9El =  $('#9');  // Access 9  am
    var textarea10El = $('#10'); // Access 10 am
    var textarea11El = $('#11'); // Access 11 am
    var textarea12El = $('#12'); // Access 12 am
    var textarea13El = $('#13'); // Access 1  pm
    var textarea14El = $('#14'); // Access 2  pm
    var textarea15El = $('#15'); // Access 3  pm
    var textarea16El = $('#16'); // Access 4  pm
    var textarea17El = $('#17'); // Access 5  pm

    // SWITCH to apply correct CSS formating depending on the CURRENT HOUR

    // Possible Refactoring
    // textarea9El.parseInt possibly with this()

    switch (currentHour) {
        case 9:
            if (environment="T") {console.log("9am")};            
            textarea9El.attr ('class','col-md-10 textarea present'); 
            textarea10El.attr ('class','col-md-10 textarea future');
            textarea11El.attr ('class','col-md-10 textarea future');
            textarea12El.attr ('class','col-md-10 textarea future');
            textarea13El.attr ('class','col-md-10 textarea future');
            textarea14El.attr ('class','col-md-10 textarea future');
            textarea15El.attr ('class','col-md-10 textarea future');
            textarea16El.attr ('class','col-md-10 textarea future');
            textarea17El.attr ('class','col-md-10 textarea future');
            break;
        case 10:
            if (environment="T") {console.log("10am")};  
            textarea9El.attr ('class','col-md-10 textarea past');
            textarea10El.attr ('class','col-md-10 textarea present');
            textarea11El.attr ('class','col-md-10 textarea future');
            textarea12El.attr ('class','col-md-10 textarea future');
            textarea13El.attr ('class','col-md-10 textarea future');
            textarea14El.attr ('class','col-md-10 textarea future');
            textarea15El.attr ('class','col-md-10 textarea future');
            textarea16El.attr ('class','col-md-10 textarea future');
            textarea17El.attr ('class','col-md-10 textarea future');
            break;
        case 11:
            if (environment="T") {console.log("11am")};  
            textarea9El.attr ('class','col-md-10 textarea past');
            textarea10El.attr ('class','col-md-10 textarea past');
            textarea11El.attr ('class','col-md-10 textarea present');
            textarea12El.attr ('class','col-md-10 textarea future');
            textarea13El.attr ('class','col-md-10 textarea future');
            textarea14El.attr ('class','col-md-10 textarea future');
            textarea15El.attr ('class','col-md-10 textarea future');
            textarea16El.attr ('class','col-md-10 textarea future');
            textarea17El.attr ('class','col-md-10 textarea future');
            break;
        case 12:
            if (environment="T") {console.log("12am")};  
            textarea9El.attr ('class','col-md-10 textarea past');
            textarea10El.attr ('class','col-md-10 textarea past');
            textarea11El.attr ('class','col-md-10 textarea past');
            textarea12El.attr ('class','col-md-10 textarea present');
            textarea13El.attr ('class','col-md-10 textarea future');
            textarea14El.attr ('class','col-md-10 textarea future');
            textarea15El.attr ('class','col-md-10 textarea future');
            textarea16El.attr ('class','col-md-10 textarea future');
            textarea17El.attr ('class','col-md-10 textarea future');
            break;
        case 13:
            if (environment="T") {console.log("1pm")};  
            textarea9El.attr ('class','col-md-10 textarea past');
            textarea10El.attr ('class','col-md-10 textarea past');
            textarea11El.attr ('class','col-md-10 textarea past');
            textarea12El.attr ('class','col-md-10 textarea past');
            textarea13El.attr ('class','col-md-10 textarea present');
            textarea14El.attr ('class','col-md-10 textarea future');
            textarea15El.attr ('class','col-md-10 textarea future');
            textarea16El.attr ('class','col-md-10 textarea future');
            textarea17El.attr ('class','col-md-10 textarea future');
            break;
        case 14:
            if (environment="T") {console.log("2pm")}; 
            textarea9El.attr ('class','col-md-10 textarea past');
            textarea10El.attr ('class','col-md-10 textarea past');
            textarea11El.attr ('class','col-md-10 textarea past');
            textarea12El.attr ('class','col-md-10 textarea past');
            textarea13El.attr ('class','col-md-10 textarea past');
            textarea14El.attr ('class','col-md-10 textarea present');
            textarea15El.attr ('class','col-md-10 textarea future');
            textarea16El.attr ('class','col-md-10 textarea future');
            textarea17El.attr ('class','col-md-10 textarea future');
            break;
        case 15:
            if (environment="T") {console.log("3pm")}; 
            textarea9El.attr ('class','col-md-10 textarea past');
            textarea10El.attr ('class','col-md-10 textarea past');
            textarea11El.attr ('class','col-md-10 textarea past');
            textarea12El.attr ('class','col-md-10 textarea past');
            textarea13El.attr ('class','col-md-10 textarea past');
            textarea14El.attr ('class','col-md-10 textarea past');
            textarea15El.attr ('class','col-md-10 textarea present');
            textarea16El.attr ('class','col-md-10 textarea future');
            textarea17El.attr ('class','col-md-10 textarea future');
            break;
        case 16:
            if (environment="T") {console.log("4pm")}; 
            textarea9El.attr ('class','col-md-10 textarea past');
            textarea10El.attr ('class','col-md-10 textarea past');
            textarea11El.attr ('class','col-md-10 textarea past');
            textarea12El.attr ('class','col-md-10 textarea past');
            textarea13El.attr ('class','col-md-10 textarea past');
            textarea14El.attr ('class','col-md-10 textarea past');
            textarea15El.attr ('class','col-md-10 textarea past');
            textarea16El.attr ('class','col-md-10 textarea present');
            textarea17El.attr ('class','col-md-10 textarea future');
            break;
        case 17:
            if (environment="T") {console.log("5pm")}; 
            textarea9El.attr ('class','col-md-10 textarea past');
            textarea10El.attr ('class','col-md-10 textarea past');
            textarea11El.attr ('class','col-md-10 textarea past');
            textarea12El.attr ('class','col-md-10 textarea past');
            textarea13El.attr ('class','col-md-10 textarea past');
            textarea14El.attr ('class','col-md-10 textarea past');
            textarea15El.attr ('class','col-md-10 textarea past');
            textarea16El.attr ('class','col-md-10 textarea past');
            textarea17El.attr ('class','col-md-10 textarea present');
            break;
        default:
            if (environment="T") {console.log("Not Between 9am - 5pm e.g. NEXT DAY")}; 
            textarea9El.attr ('class','col-md-10 textarea future');
            textarea10El.attr ('class','col-md-10 textarea future');
            textarea11El.attr ('class','col-md-10 textarea future');
            textarea12El.attr ('class','col-md-10 textarea future');
            textarea13El.attr ('class','col-md-10 textarea future');
            textarea14El.attr ('class','col-md-10 textarea future');
            textarea15El.attr ('class','col-md-10 textarea future');
            textarea16El.attr ('class','col-md-10 textarea future');
            textarea17El.attr ('class','col-md-10 textarea future');
            break;
    }

//


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

// localStorage.setItem("9am Text", "Text");

// Get stored text from local storage and display

text9El.val(localStorage.getItem("9am Text"));
text10El.val(localStorage.getItem("10am Text"));
text11El.val(localStorage.getItem("11am Text"));
text12El.val(localStorage.getItem("12am Text"));
text13El.val(localStorage.getItem("1pm Text"));
text14El.val(localStorage.getItem("2pm Text"));
text15El.val(localStorage.getItem("3pm Text"));
text16El.val(localStorage.getItem("4pm Text"));
text17El.val(localStorage.getItem("5pm Text"));




// Potential Refactoring:
// 1. make a variable to select all text areas, use this variable to set to a blank string
//    In JS querySelectorAll("textarea") textarea - all elements . - class # - ID
//    In JQuery $('textarea') 
// 2. then with the local storage remove the items from storage - localStorage.removeItem("9am Text") - Is there a way to remove all local storage?
//    to REMOVE ALL LOCAL STORAGE localStorage.clear() https://www.w3schools.com/jsref/met_storage_clear.asp
// Note cant mix Javascript with JQuery in terms of accessing elements

// Adding Save All Functionality


var saveAllButton = document.querySelector("#saveAll");

saveAllButton.addEventListener("click",function(event) {
    event.preventDefault(); // Prevent default behaviour
    store9 = text9El.val();
    localStorage.setItem("9am Text",store9); // saves the data to local storage
    store10 = text10El.val();
    localStorage.setItem("10am Text",store10); // saves the data to local storage
    store11 = text11El.val();
    localStorage.setItem("11am Text",store11); // saves the data to local STORAGE
    store12 = text12El.val();
    localStorage.setItem("12am Text",store12); // saves the data to local STORAGE
    store13 = text13El.val();
    localStorage.setItem("1pm Text",store13); // saves the data to local STORAGE
    store14 = text14El.val();
    localStorage.setItem("2pm Text",store14); // saves the data to local STORAGE
    store15 = text15El.val();
    localStorage.setItem("3pm Text",store15); // saves the data to local STORAGE
    store16 = text16El.val();
    localStorage.setItem("4pm Text",store16); // saves the data to local STORAGE
    store17 = text17El.val();
    localStorage.setItem("5pm Text",store17); // saves the data to local storage
})

// Adding Reset Functionality

var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(event) {
    event.preventDefault();
    // Set the Data to be BLANK
    // This method leaves the Keys present but sets the value to null
    // You could use localStorage.clear() to remove all. 
    localStorage.setItem("9am Text", "");
    localStorage.setItem("10am Text", "");
    localStorage.setItem("11am Text", "");
    localStorage.setItem("12am Text", "");
    localStorage.setItem("1pm Text", "");
    localStorage.setItem("2pm Text", "");
    localStorage.setItem("3pm Text", "");
    localStorage.setItem("4pm Text", "");
    localStorage.setItem("5pm Text", "");
    // Get the Data Back
    text9El.val(localStorage.getItem("9am Text"));
    text10El.val(localStorage.getItem("10am Text"));
    text11El.val(localStorage.getItem("11am Text"));
    text12El.val(localStorage.getItem("12am Text"));
    text13El.val(localStorage.getItem("1pm Text"));
    text14El.val(localStorage.getItem("2pm Text"));
    text15El.val(localStorage.getItem("3pm Text"));
    text16El.val(localStorage.getItem("4pm Text"));
    text17El.val(localStorage.getItem("5pm Text"));
})

// Adding Save Functionality for Text

// Access the Save Buttons for each Time Slot

var save9El =  $('#save9');  // Access 9  am
var save10El = $('#save10'); // Access 10 am
var save11El = $('#save11'); // Access 11 am
var save12El = $('#save12'); // Access 12 am
var save13El = $('#save13'); // Access 1  pm
var save14El = $('#save14'); // Access 2  pm
var save15El = $('#save15'); // Access 3  pm
var save16El = $('#save16'); // Access 4  pm
var save17El = $('#save17'); // Access 5  pm

// 9AM SAVE

save9El.on("click", function(event) {
        event.preventDefault(); // Prevent Default Behaviour
        if (environment="T") {
            console.log(text9El.val());
        }
        store9 = text9El.val();
        if (environment="T") {
           console.log(store9); 
        }
        localStorage.setItem("9am Text",store9); // saves the data to local storage

})

// 10AM SAVE

save10El.on("click", function(event) {
    event.preventDefault(); // Prevent Default Behaviour
    if (environment="T") {
        console.log(text10El.val());
    }
    store10 = text10El.val();
    if (environment="T") {
       console.log(store10); 
    }
    localStorage.setItem("10am Text",store10); // saves the data to local storage

})

// 11AM SAVE

save11El.on("click", function(event) {
    event.preventDefault(); // Prevent Default Behaviour
    if (environment="T") {
        console.log(text11El.val());
    }
    store11 = text11El.val();
    if (environment="T") {
       console.log(store11); 
    }
    localStorage.setItem("11am Text",store11); // saves the data to local storage

})

// 12AM SAVE

save12El.on("click", function(event) {
    event.preventDefault(); // Prevent Default Behaviour
    if (environment="T") {
        console.log(text12El.val());
    }
    store12 = text12El.val();
    if (environment="T") {
       console.log(store12); 
    }
    localStorage.setItem("12am Text",store12); // saves the data to local storage

})

// 1PM SAVE

save13El.on("click", function(event) {
    event.preventDefault(); // Prevent Default Behaviour
    if (environment="T") {
        console.log(text13El.val());
    }
    store13 = text13El.val();
    if (environment="T") {
       console.log(store13); 
    }
    localStorage.setItem("1pm Text",store13); // saves the data to local storage

})

// 2PM SAVE

save14El.on("click", function(event) {
    event.preventDefault(); // Prevent Default Behaviour
    if (environment="T") {
        console.log(text14El.val());
    }
    store14 = text14El.val();
    if (environment="T") {
       console.log(store14); 
    }
    localStorage.setItem("2pm Text",store14); // saves the data to local storage

})

// 3PM SAVE

save15El.on("click", function(event) {
    event.preventDefault(); // Prevent Default Behaviour
    if (environment="T") {
        console.log(text15El.val());
    }
    store15 = text15El.val();
    if (environment="T") {
       console.log(store15); 
    }
    localStorage.setItem("3pm Text",store15); // saves the data to local storage

})

// 4PM SAVE

save16El.on("click", function(event) {
    event.preventDefault(); // Prevent Default Behaviour
    if (environment="T") {
        console.log(text16El.val());
    }
    store16 = text16El.val();
    if (environment="T") {
       console.log(store16); 
    }
    localStorage.setItem("4pm Text",store16); // saves the data to local storage

})

// 5PM SAVE

save17El.on("click", function(event) {
    event.preventDefault(); // Prevent Default Behaviour
    if (environment="T") {
        console.log(text17El.val());
    }
    store17 = text17El.val();
    if (environment="T") {
       console.log(store17); 
    }
    localStorage.setItem("5pm Text",store17); // saves the data to local storage

})

// JAVASCRIPT - Vanila 
// save9El.addEventListener("click", function(event) {
//     console.log("Button Works");
//     event.preventDefault();
//     console.log(text9El.text());
//     console.log(text9El.val());
//     store9 = text9El.val();
//     console.log(store9);
//     localStorage.setItem("9am Text",store9);
// })



