window.onload = function()
{
	init();
}
function init()
{
	
}

var A = 0;
var B = 0;
var C = 0;
var D = 0;

var question2 = "Which of these bands do you prefer?"


var Q2A = "The Strokes"
var Q2B = "Foo Fighters"
var Q2C = "Metallica"
var Q2D = "Green Day"

var question3 = "How long have you been listening to the Red Hot Chili Peppers?"    //Here I define all variables I will use for each separate question.

var Q3A = "less than 6 months"
var Q3B = "Less than 2 years"
var Q3C = "Less than 5 years"
var Q3D = "5 years or more"

var question4 = "Pick your favourite from these instruments"

var question5 = "Pick your favourite from these songs"

var Q5A = "Under The Bridge"
var Q5B = "Dark Necesseties"
var Q5C = "Suck My Kiss"
var Q5D = "Can't Stop"


var count = 1




function answer(answer)
{
	

	if (answer == 1)
	{
		A = A + 1;
	}

	if (answer == 2)
	{
		B = B + 1;                   //This increments each value depending on which quiz answer has been chosen. Whichever is the highest at the end of the quiz correlates to which band member you are most like.
	}

	if (answer == 3)
	{
		C = C + 1;
	}

	if (answer == 4)
	{
		D = D + 1;
	}


	count = count + 1;

	nextquestion(count);



}

function nextquestion(count)                                                //This function determines which question is displayed based on the value of count. The variables defined at the top of the code are used here.
{
	if (count == 2)
	{
	document.getElementById("nextQuestion").innerHTML = (question2);
	document.getElementById("QText1").innerHTML = Q2A;
	document.getElementById("QText2").innerHTML = Q2B;
	document.getElementById("QText3").innerHTML = Q2C;
	document.getElementById("QText4").innerHTML = Q2D;


	}

	if (count == 3)
	{
	document.getElementById("nextQuestion").innerHTML = (question3);
	document.getElementById("QText1").innerHTML = Q3A;
	document.getElementById("QText2").innerHTML = Q3B;
	document.getElementById("QText3").innerHTML = Q3C;
	document.getElementById("QText4").innerHTML = Q3D;


	}

	if (count == 4)
	{
	document.getElementById("nextQuestion").innerHTML = (question4);

	document.getElementById("QPic1").src = "Assets/guitar2.png";
	document.getElementById("QPic1").id = "QSmallPic1";


	document.getElementById("QPic2").src = "Assets/guitar4.png";      //Question 4 uses different images from the boxes so the image source is changed.
	document.getElementById("QPic2").id = "QSmallPic2";
	
	document.getElementById("QPic3").src = "Assets/drums.png";
	document.getElementById("QPic3").id = "QSmallPic3";

	document.getElementById("QPic4").src = "Assets/mic.png";
	document.getElementById("QPic4").id = "QSmallPic4";


	document.getElementById("QText1").innerHTML = "";
	document.getElementById("QText2").innerHTML = "";
	document.getElementById("QText3").innerHTML = "";
	document.getElementById("QText4").innerHTML = "";


	}

		if (count == 5)
	{

	document.getElementById("nextQuestion").innerHTML = (question5);
	document.getElementById("QSmallPic1").id = "QPic1";
	document.getElementById("QSmallPic2").id = "QPic2";
	document.getElementById("QSmallPic3").id = "QPic3";
	document.getElementById("QSmallPic4").id = "QPic4";


	document.getElementById("QPic1").src = "Assets/AnswerBox.png";
	document.getElementById("QPic2").src = "Assets/AnswerBox.png";
	document.getElementById("QPic3").src = "Assets/AnswerBox.png";
	document.getElementById("QPic4").src = "Assets/AnswerBox.png";

	document.getElementById("QText1").innerHTML = Q5A;
	document.getElementById("QText2").innerHTML = Q5B;
	document.getElementById("QText3").innerHTML = Q5C;
	document.getElementById("QText4").innerHTML = Q5D;


	}





	


	count = count + 1;
	console.log(count);


	if (count == 7)
	{
		
		$(".answers").remove();														//Here I use JQuery to remove all elements in the "answers" id to display the result image.
		if (A > B && A > C && A > D)                                                          
		{
			document.getElementById("nextQuestion").innerHTML = ("You're like Anthony");				//The highest variable is determined from A, B, C or D and appropriate results are displayed.
			var pic = document.createElement("img");
			pic.src = "Assets/AnthonyKiedis.jpg";
			document.getElementById("resultPic").appendChild(pic);
			
		}

		else if (B > A && B > C && B > D)
		{
			console.log("You're like Flea");
			document.getElementById("nextQuestion").innerHTML = ("You're like Flea");
			var pic = document.createElement("img");
			pic.src = "Assets/Flea.jpg";
			document.getElementById("resultPic").appendChild(pic);
		}

		else if (C > A && C > B && C > D)
		{
			document.getElementById("nextQuestion").innerHTML = ("You're like Chad");
			var pic = document.createElement("img");
			pic.src = "Assets/Chad.jpg";
			document.getElementById("resultPic").appendChild(pic);
			
		}

		else if (D > A && D > C && D > B)
		{
			document.getElementById("nextQuestion").innerHTML = ("You're like Josh");
			var pic = document.createElement("img");
			pic.src = "Assets/josh.jpg";
			document.getElementById("resultPic").appendChild(pic);
		}

		else
		{
			document.getElementById("nextQuestion").innerHTML = ("You're like John");
			var pic = document.createElement("img");
			pic.src = "Assets/john.jpg";
			document.getElementById("resultPic").appendChild(pic);
		}



	}

}
	





