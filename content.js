

// Add bubble to the top of the page.
var bubbleDOM = document.createElement('div');
var bubble_status = 0;
bubbleDOM.setAttribute('class', 'selection_bubble');
document.body.appendChild(bubbleDOM);

// Lets listen to mouseup DOM events.
document.addEventListener('mouseup', function (e) {
  var X_pos = window.getSelection().getRangeAt(0).getBoundingClientRect().x+window.pageXOffset
  var Y_pos = window.getSelection().getRangeAt(0).getBoundingClientRect().y+window.pageYOffset
  var selection_str = window.getSelection().toString().toLowerCase();
  if (selection_str.length > 0) {

    renderBubble(X_pos, Y_pos, selection_str);
  }
}, false);	

// Close the bubble when we click on the screen.
document.addEventListener('mousedown', function (e) {
  if (bubble_status==0){
  	bubbleDOM.style.visibility = 'hidden';	
  }

}, false);

// bubbleDOM.addEventListener('mousedown', function(e) {
// 	showImage();
// }, false);



// Move that bubble to the appropriate location.
function renderBubble(mouseX, mouseY, selection_str) {

  // bubbleDOM.innerHTML = selection_str;
  bubbleDOM.style.top = mouseY - 40 + 'px';
  bubbleDOM.style.left = mouseX + 'px';
  bubbleDOM.style.visibility = 'visible';
  bubbleDOM.innerHTML = "<img src=\"https://raw.githubusercontent.com/pytseng/tmd_hackathon_chrome_extension/master/images/not_found_pill.png\">";
  const result = politicians.find( politician => {
  	if(politician.name.toLowerCase() == selection_str) {
  		debugger;
  		bubbleDOM.innerHTML = "<img src=\"" + politician.img_url +"\" width=\"300px\" height=\"180px\" >";	
  	}
  })
}

// function showImage(){ 
// 	bubble_status = 1;
// 	bubbleDOM.innerHTML = "<img src=\"https://pbs.twimg.com/profile_images/681152691461042177/_PrgDgFA_400x400.jpg\" width=\"200px\" height=\"200px\" >";
// 	bubbleDOM.style.visibility = 'visible';
// }

var politicians = [
	{name: "catherine cortez masto", img_url:"https://github.com/roycboyc/OpenPolitics/blob/master/CatherineMasto.png?raw=true"},
	{name: "chuck schumer", img_url:"https://github.com/roycboyc/OpenPolitics/blob/master/CharlesSchumer.png?raw=true"},
	{name: "Darrell Issa", img_url:"https://github.com/roycboyc/OpenPolitics/blob/master/DarrellIssa.png?raw=true"},
	{name: "Elizabeth Warren", img_url:"https://github.com/roycboyc/OpenPolitics/blob/master/ElizabethWarren.png?raw=true"},
	{name: "Kristen Gillibrand", img_url:"https://github.com/roycboyc/OpenPolitics/blob/master/KristenGillibrand.png?raw=true"},
	{name: "Paul Ryan", img_url:"https://github.com/roycboyc/OpenPolitics/blob/master/PaulRyan.png?raw=true"},
	{name: "Ted Cruz", img_url:"https://github.com/roycboyc/OpenPolitics/blob/master/TedCruz.png?raw=true"},
	{name: "Rand Paul", img_url:"https://github.com/roycboyc/OpenPolitics/blob/master/RandPaul.png?raw=true"},
	{name: "Trey Gowdy", img_url:"https://github.com/roycboyc/OpenPolitics/blob/master/TreyGowdy.png?raw=true"},
	{name: "Bernie Sanders", img_url:"https://github.com/roycboyc/OpenPolitics/blob/master/BernieSanders.PNG?raw=true"},
	{name: "Brent Farenthold", img_url:"https://github.com/roycboyc/OpenPolitics/blob/master/BlakeFarenhold.PNG?raw=true"},
	{name: "Charles Dent", img_url:"https://github.com/roycboyc/OpenPolitics/blob/master/CharlesDent.PNG?raw=true"},
	{name: "Claire McCaskill", img_url:"https://github.com/roycboyc/OpenPolitics/blob/master/ClarieMcCaskill.PNG?raw=true"},
	{name: "Cory Booker", img_url:"https://github.com/roycboyc/OpenPolitics/blob/master/CoryBooker.PNG?raw=true"},
	{name: "Devin Nunes", img_url:"https://github.com/roycboyc/OpenPolitics/blob/master/DevinNunes.PNG?raw=true"},
	{name: "Jefferson Sessions", img_url:"https://github.com/roycboyc/OpenPolitics/blob/master/JeffersonSessions.PNG?raw=true"},
	{name: "Joe Donnelly", img_url:"https://github.com/roycboyc/OpenPolitics/blob/master/JoeDonnelly.PNG?raw=true"},
	{name: "John McCain", img_url:"https://github.com/roycboyc/OpenPolitics/blob/master/JohnMcChain.PNG?raw=true"},
	{name: "Chuck Schumer", img_url:"https://github.com/roycboyc/OpenPolitics/blob/master/JonathanTester.PNG?raw=true"},
	{name: "Mike Pompeo", img_url:"https://github.com/roycboyc/OpenPolitics/blob/master/MikePompeo.PNG?raw=true"},
	{name: "Ralph Norman", img_url:"https://github.com/roycboyc/OpenPolitics/blob/master/RalphNorman.PNG?raw=true"},
	{name: "Amy Klobuchar", img_url:"https://raw.githubusercontent.com/roycboyc/OpenPolitics/master/AmyKlobuchar.png?raw=true"},
	{name: "Barbara Boxer", img_url:"https://github.com/roycboyc/OpenPolitics/blob/master/BarbaraBoxer.png?raw=true"},
	{name: "Chuck Grassley", img_url:"https://github.com/roycboyc/OpenPolitics/blob/master/ChuckGrassley.png?raw=true"},
	{name: "IleanaRos Lehtinen", img_url:"https://github.com/roycboyc/OpenPolitics/blob/master/IleanaRos-Lehtinen.png?raw=true"},
	{name: "Jason Chaffetz", img_url:"https://github.com/roycboyc/OpenPolitics/blob/master/JasonChaffetz.png?raw=true"},
	{name: "John Lewis", img_url:"https://github.com/roycboyc/OpenPolitics/blob/master/JohnLewis.png?raw=true"},
	{name: "Keith Ellison", img_url:"https://github.com/roycboyc/OpenPolitics/blob/master/KeithEllison.png?raw=true"},
	{name: "Lindsey Graham", img_url:"https://github.com/roycboyc/OpenPolitics/blob/master/LindseyGraham.png?raw=true"},
	{name: "Nancy Pelosi", img_url:"https://github.com/roycboyc/OpenPolitics/blob/master/NancyPelosi.png?raw=true"},


	];

