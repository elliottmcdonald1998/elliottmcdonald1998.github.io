window.onload = function()
{
	init();
}
function init()
{
	

	
	
	if (window.location.href.indexOf("savedguitars") > -1)
	{
		listNames();												//This checks the URL of the page.
	}

	if (localStorage.getItem("bodyColour") === null && localStorage.getItem("plateColour") === null && localStorage.getItem("headColour") === null )		//Checks there is no local storage for any of the customisable parts of the guitar.
	{

		document.getElementById("bodyImage").src = "Assets/regularbody.png";
		document.getElementById("plateImage").src ="Assets/regularplate.png";		//Regular coloured guitar parts are displayed if there is no local storage
		document.getElementById("headImage").src ="Assets/regularhead.png";
		var guitars = [];
		var bodies = [];
		var plates = [];
		var heads = [];
		localStorage.setItem("guitars", JSON.stringify(guitars));					//Here I define lots of variables which will be used to store customised guitars in local storage.
		localStorage.setItem("bodies", JSON.stringify(bodies));
		localStorage.setItem("plates", JSON.stringify(plates));
		localStorage.setItem("heads", JSON.stringify(heads));
		localStorage.setItem("count", 0);											//This is used to determine where in the guitar parts arrays to store new saved guitars.

		
	}
	
	else
	{
		
		document.getElementById("bodyImage").src = localStorage.getItem("bodyColour");			//If there is local storage of any of the customisable guitar parts display them.
		document.getElementById("plateImage").src = localStorage.getItem("plateColour");
		document.getElementById("headImage").src = localStorage.getItem("headColour");
		
	}






	
}


function bodColour(colour)												//This function is used when a body colour is clicked and sets it to the chosen colour by fetching the appropriate image.
{
	console.log(colour);
	document.getElementById("bodyImage").src = "Assets/"+colour;			
	localStorage.setItem("bodyColour", "Assets/"+colour);
}

function plateColour(colour)											//This function is used when a plate colour is clicked and sets it to the chosen colour by fetching the appropriate image.
{
	console.log(colour);
	document.getElementById("plateImage").src = "Assets/"+colour;
	localStorage.setItem("plateColour", "Assets/"+colour);
}

function headColour(colour)												//This function is used when a head colour is clicked and sets it to the chosen colour by fetching the appropriate image.
{
	console.log(colour);
	document.getElementById("headImage").src = "Assets/"+colour;
	localStorage.setItem("headColour", "Assets/"+colour);
}


function guitarName()
{
	var count = localStorage.getItem("count");
	var currentName = prompt("Name your creation.");					//When save is selected a prompt is displayed to enter a name for the created guitar.
	var localGuitars = JSON.parse(localStorage.getItem("guitars"));     //The guitars string is accessed in local storage and parsed using JSON.
	localGuitars[count] = currentName;									//The name for the guitar is stored at the "count" location in the array.
	localStorage.setItem("guitars", JSON.stringify(localGuitars));		//It is then converted back to a string and is stored in local storage.

	var localBodies = JSON.parse(localStorage.getItem("bodies"));		//For each customisable part of the guitar a similar method is used as the name of the guitar.
	localBodies[count] = localStorage.getItem("bodyColour");			//The current colour of the part is saved in an array and then in local storage.
	localStorage.setItem("bodies", JSON.stringify(localBodies));

	var localPlates = JSON.parse(localStorage.getItem("plates"));
	localPlates[count] = localStorage.getItem("plateColour");
	localStorage.setItem("plates", JSON.stringify(localPlates));

	var localHeads = JSON.parse(localStorage.getItem("heads"));
	localHeads[count] = localStorage.getItem("headColour");
	localStorage.setItem("heads", JSON.stringify(localHeads));

	count++;															//Count is incremented for the next addition to the list of guitars
	localStorage.setItem("count", count);



	
	


	
}

function listNames()													//This is used when the saved guitars page is loaded. The names of guitars are fetched from local storage and displayed.
{
	var localGuitars = JSON.parse(localStorage.getItem("guitars"));
	var list = document.getElementById("allGuitars");
	var localGuitars = JSON.parse(localStorage.getItem("guitars"));
	for (i = 0; i < localGuitars.length; i++)
	{
		var enter = document.createElement("li");
		enter.appendChild(document.createTextNode(localGuitars[i]));
		list.appendChild(enter);
		enter.id = i;
		

		
	}


}

function clickedguitar(event)
{
	var number = event.target.id;										//If a guitar is selected on the home page its position in the array is fetched.
	console.log(number);
	var localBodies = JSON.parse(localStorage.getItem("bodies"));
	var savedBody = localBodies[number];
	var localPlates = JSON.parse(localStorage.getItem("plates"));
	var savedPlate = localPlates[number];
	var localHeads = JSON.parse(localStorage.getItem("heads"));
	var savedHead = localHeads[number];
	

	localStorage.setItem("bodyColour", savedBody);						//They are then stored in local storage so are used when the customiser page is loaded.
	localStorage.setItem("plateColour", savedPlate);
	localStorage.setItem("headColour", savedHead);
	window.location.href = "customiser.html";


}






