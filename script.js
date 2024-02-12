const addBtn = document.getElementById("addBtn");
const toDoList = document.getElementsByClassName("todo--container")[0];
const task = document.getElementsByTagName('input')[0];
let header = document.getElementById("header");

let tempdt = new Date();
var time = `Time:  ${tempdt.getHours()} : ${tempdt.getMinutes()} : ${tempdt.getSeconds()}`;



//Date and Time Div
let dtDiv = document.createElement("div");
let dateData = document.createElement("p");
dateData.className = "dateData";
let timeData = document.createElement("p");
timeData.className = "timeData";

dtDiv.className = "dtDiv";

header.append(dtDiv);
dtDiv.append(dateData);//for Date
dtDiv.append(timeData);//for Time

function updateDateTime() {
	//creating date object
	let dt = new Date();

	//Date
	let date = dt.getDate();
	let month = dt.getMonth() + 1;
	let year = dt.getFullYear()

	date = (date < 10) ? "0" + date : date;
	month = (month < 10) ? "0" + month : month;
	year = (year < 10) ? "0" + year : year;

	dateData.innerText = `Date:  ${date} / ${month} / ${year}`;
	console.log(month);

	//Time
	let hours = dt.getHours();
	let minutes = dt.getMinutes();
	let seconds = dt.getSeconds();

	hours = (hours < 10) ? "0" + hours : hours;
	minutes = (minutes < 10) ? "0" + minutes : minutes;
	seconds = (seconds < 10) ? "0" + seconds : seconds;

	timeData.innerText = `Time:  ${hours} : ${minutes} : ${seconds}`;
};

updateDateTime();

setInterval(updateDateTime,1000);

//Function to handle
function addBtnClick() {
	//Used if else to check for empty strings
	if(task.value.trim() !== ""){
		const newDiv = document.createElement("div");
		const remBtn = document.createElement("button");
		const isDone = document.createElement("input");
		const isDoneLabel = document.createElement("label");
		
		isDone.type = "checkbox";//Making the input type as checkbox

		isDone.id = "isDoneCheck";//Adding id attribute to checkbox
		isDone.checked = false;//Adding id attribute to checkbox

		isDoneLabel.htmlFor = "isDoneCheck";//Specifying label for checkbox with id "isDoneCheck"

		isDoneLabel.innerText = "Task Completed:"//Setting innerText of label

		const textDiv = document.createElement("div");//Making new div for the text of the task
        	textDiv.className = "textDiv";
        	textDiv.innerText = task.value;
	
        	newDiv.className = "taskDiv";//Adding id attr to the div containg the task

        	newDiv.append(textDiv);// Appending the new div with class "textDiv" to the newDiv
		
		toDoList.append(newDiv);//Appending new divs for new tasks

		//Appending content inside the newDiv(task div)
		newDiv.append(isDoneLabel);
		newDiv.append(isDone);
		newDiv.append(remBtn);

		remBtn.innerText = "Remove Task"
		task.value = "";
		
		remBtn.addEventListener("click", () => {
			toDoList.removeChild(newDiv);
		})

		isDone.addEventListener("click", () => {
    		const taskDiv = isDone.closest(".taskDiv");

    		if (isDone.checked === true) {
        		taskDiv.style.background = "linear-gradient(to right, rgb(255, 250, 95), rgb(33 219 64))";
    		} else {
        		taskDiv.style.background = "";
	    	}

	    	taskDiv.style.transition = "background 2s ease";
		});


	} else {
		task.value = "";
		alert("Enter a task");
	}


}

addBtn.addEventListener("click", addBtnClick);
