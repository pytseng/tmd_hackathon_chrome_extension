

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

bubbleDOM.addEventListener('mousedown', function(e) {
	showImage();
}, false);



// Move that bubble to the appropriate location.
function renderBubble(mouseX, mouseY, selection_str) {
  bubbleDOM.innerHTML = "<input type=\"image\" src=\"https://lh3.googleusercontent.com/20g2-tl9ftUe52-WrBNnFavTwbBzgQv8RHl4OpyZZGCigP8iv9-drCSHEjIvVWvQ1JQ4bkf3zktugIew7W8J=w1147-h605\"/>";
  
  // bubbleDOM.innerHTML = selection_str;
  bubbleDOM.style.top = mouseY - 40 + 'px';
  bubbleDOM.style.left = mouseX + 'px';
  bubbleDOM.style.visibility = 'visible';
  const result = politicians.find( politician => politician.name == selection_str);
  if (typeof result !== 'undefined') { 

  	bubbleDOM.innerHTML = "<img src=\"" + politician.img_url +" width=\"300px\" height=\"200px\" >";
  }
  // if (selection_str == "rand paul"){
  // 	img_path = "images/Rand Paul.png";
  // 	bubbleDOM.innerHTML = "<img src=\"https://pbs.twimg.com/profile_images/681152691461042177/_PrgDgFA_400x400.jpg\" width=\"200px\" height=\"200px\" >";
  // }
}

function showImage(){ 
	console.log("cliiiick");
	bubble_status = 1;
	bubbleDOM.innerHTML = "<img src=\"https://pbs.twimg.com/profile_images/681152691461042177/_PrgDgFA_400x400.jpg\" width=\"200px\" height=\"200px\" >";
	bubbleDOM.style.visibility = 'visible';
}

var politicians = [{name:"rand paul", img_url:"https://raw.githubusercontent.com/roycboyc/OpenPolitics/master/AlFranken.png"}];

