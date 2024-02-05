const addBtn = document.getElementById("addBtn");
const toDoList = document.getElementsByClassName("todo--container")[0];
const task = document.getElementsByTagName('input')[0];

function handleClicks() {
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

        newDiv.appendChild(textDiv);// Appending the new div with class "textDiv" to the newDiv
		
		toDoList.appendChild(newDiv);//Appending new divs for new tasks

		//Appending content inside the newDiv(task div)
		newDiv.appendChild(isDoneLabel);
		newDiv.appendChild(isDone);
		newDiv.appendChild(remBtn);

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

addBtn.addEventListener("click", handleClicks);

let url = "http://worldtimeapi.org/api/timezone/Asia/Kolkata";

fetch(url)
	.then(response => {
		return response.json()
	}) .then(data => {
		console.log(data.datetime)
	})