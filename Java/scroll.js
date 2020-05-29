//Get the button:
downbutton = document.getElementById("downBtn");
upbutton = document.getElementById("upBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

var scroll = 0
var pctScrolled = 0

function scrollFunction() {
  console.log(scroll);


  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    upbutton.style.display = "block";
  }
  else{
    upbutton.style.display="none";
  }

  if (document.body.scrollTop < document.body.scrollTop.clientHeight*4 - 20 || document.documentElement.scrollTop < document.documentElement.clientHeight*4 - 20) {
    downbutton.style.display = "block";
  }
  else{
    downbutton.style.display="none";
  }

  var winheight= window.innerHeight || (document.documentElement || document.body).clientHeight
  var docheight = getDocHeight()
  var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
  var trackLength = docheight - winheight
  pctScrolled = Math.floor(scrollTop/trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
  console.log(pctScrolled + '% scrolled')


  if (pctScrolled < 24)
  {
    scroll = 0;
  }

  else if (pctScrolled >= 24 && pctScrolled < 49)
  {
    scroll = 1;
  }

  else if (pctScrolled >= 49 && pctScrolled < 74)
  {
    scroll = 2;
  }

  else if (pctScrolled >= 74 && pctScrolled < 99)
  {
    scroll = 3;
  }

  else{
    scroll = 4;
  }



}

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    )
}

// When the user clicks on the button, scroll to the top of the document
function nextFunction() {
  if (scroll <=4)
  {
    scroll += 1;
    document.body.scrollTop = document.body.clientHeight * scroll;
    document.documentElement.scrollTop = document.documentElement.clientHeight * scroll;
  }

}

function prevFunction() {
  if(scroll >= 0)
  {
    console.log(pctScrolled % ((scroll * 25)-1))
    if(pctScrolled % ((scroll * 25)-1) != 0)
    {
      console.log("poo")
      document.body.scrollTop = document.body.clientHeight * scroll;
      document.documentElement.scrollTop = document.documentElement.clientHeight * scroll;
    }
    else
    {
      console.log("poo2")
      scroll -= 1;
      document.body.scrollTop = document.body.clientHeight * scroll;
      document.documentElement.scrollTop = document.documentElement.clientHeight * scroll;
    }


  }


}
