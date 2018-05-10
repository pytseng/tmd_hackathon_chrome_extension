

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

document.addEventListener('mousedown', function (e) {
  if (bubble_status==0){
  	bubbleDOM.style.visibility = 'hidden';	
  }

}, false);

// bubbleDOM.addEventListener('mouseleave', function (e) {
//   bubble_status = 0;
//   bubbleDOM.style.visibility = 'hidden';	
// }, false);
bubbleDOM.addEventListener('mouseenter', function (e) {
	bubbleDOM.addEventListener('mouseleave', function (e) {
		bubbleDOM.style.visibility = 'hidden';
		bubble_status=0;
	}, false);
}, false);



// Move that bubble to the appropriate location.
function renderBubble(mouseX, mouseY, selection_str) {
	bubbleDOM.innerHTML = "";
	$.ajax({ 
		type : "GET", 
		url : "https://api.propublica.org/congress/v1/115/senate/members.json", 
		beforeSend: function(xhr){xhr.setRequestHeader('X-API-Key', 'IzJGY0q3AS4wImC3H3t4vGNLIdMuXC7Jn2CwArlc');},
		success : function(result) { 
			var name_match = 0;
			bubbleDOM.style.top = mouseY - 40 + 'px';
  			bubbleDOM.style.left = mouseX + 'px';
  			bubbleDOM.style.visibility = 'visible';			
		    result.results[0].members.find( member => {
			    var member_name = member.first_name + " " + member.last_name;
			  	if(member_name.toLowerCase() == selection_str) {
			  		bubble_status =1;
			  		name_match = 1;
		  			// var textnode = document.createTextNode(prop + ": " + member[prop]); 
		  			var name_str = "<li>Name: " + member_name +"</li>";
		  			var title_str = "<li>Title: " + member["title"] +"</li>";
					var state_str = "<li>State: " + member["state"] +"</li>";
					var party_str = "<li>Party: " + member["party"] +"</li>";
					var votes_with_party_pct_str = "<li>Votes_with_party_pct: " + member["votes_with_party_pct"] +"</li>";
					var missed_votes = "<li>Missed votes: " + member["missed_votes"] +"</li>";
					// links
					var twitter_url = "https://twitter.com/" + member["twitter_account"];
					var twitter_url_str = "<li><a href=\"" + twitter_url + "\" target=\"_blank\">" + "Twitter account" +"</a></li>";
					var facebook_url = "https://facebook.com/" + member["twitter_account"];
					var facebook_url_str = "<li><a href=\"" + facebook_url + "\" target=\"_blank\">" + "Facebook account" +"</a></li>";
					var contact_form_str = "<li><a href=\"" + member["contact_form"] + "\" target=\"_blank\">" + "Contact form" +"</a></li>";
					bubbleDOM.innerHTML = name_str + title_str + state_str + party_str + votes_with_party_pct_str + missed_votes + twitter_url_str + facebook_url_str + contact_form_str;
					// $('.selection_bubble').append("<a href=\"" + twitter_url + "\">"); // put it into the DOM   		  			
			  		// bubbleDOM.innerHTML("Name: " +member_name);
			  		// bubbleDOM.innerHTML("<a href=" + member["twitter_account"] + ">Twitter account</a>");
			  		// bubbleDOM.appendChild()
			  		// for (var prop in member) {
			  		// 	var textnode = document.createTextNode(prop + ": " + member[prop]); 
			  		// 	bubbleDOM.appendChild(textnode);
			  		// }
			  	}
		    })
			bubbleDOM.style.top = mouseY - 40 + 'px';
  			bubbleDOM.style.left = mouseX + 'px';
  			bubbleDOM.style.visibility = 'visible';			    
			if(name_match == 0) {
				bubbleDOM.innerHTML = "<img src=\"https://raw.githubusercontent.com/pytseng/tmd_hackathon_chrome_extension/master/images/not_found_pill.png\">";
			}		    
		}, 
		error : function(result) { 
				console.log("an error, you are doomed");
		} 
	}); 
  // bubbleDOM.innerHTML = selection_str;
  
  // const result = politicians.find( politician => {
  // 	if(politician.name.toLowerCase() == selection_str) {
  // 		debugger;
  // 		bubbleDOM.innerHTML = "<img src=\"" + politician.img_url +"\" width=\"300px\" height=\"180px\" >";	
  // 	}
  // })
}

// function showImage(){ 
// 	bubble_status = 1;
// 	bubbleDOM.innerHTML = "<img src=\"https://pbs.twimg.com/profile_images/681152691461042177/_PrgDgFA_400x400.jpg\" width=\"200px\" height=\"200px\" >";
// 	bubbleDOM.style.visibility = 'visible';
// }


// for debugging
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

