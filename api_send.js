'use strict';
document.getElementById('display_div');

let api_button = document.getElementById('api_button');
let display_div = document.getElementById('display_div')
let votes_with_party_pct, end_date_of_position, leader_ship_role, most_recent_twit, twit_account = "";



// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

api_button.onclick = function(element) {
	$.ajax({ 
	   type : "GET", 
	   url : "https://api.propublica.org/congress/v1/115/senate/members.json", 
	   beforeSend: function(xhr){xhr.setRequestHeader('X-API-Key', 'IzJGY0q3AS4wImC3H3t4vGNLIdMuXC7Jn2CwArlc');},
	   success : function(result) { 
	       votes_with_party_pct = result["results"][0]["members"][0]["votes_with_party_pct"];
	       end_date_of_position = "2019-01-03" //result["results"][0]["members"][0][""];
	       leader_ship_role = "Minority Leader"; // result["results"][0]["members"][0][""];
	       most_recent_twit = "RT @RepRichardNeal: You can’t upend the tax system without creating serious problems – &amp; we’re already seeing the #GOPTaxScam creating many…";
	       twit_account = "NancyPelosi";
	       console.log("happy new year!");
	       $('#display_div')[0]["innerHTML"] = 
	       votes_with_party_pct + "\n" +
	       end_date_of_position + "\n" +
	       leader_ship_role + "\n" +
	       most_recent_twit + "\n" +
	       twit_account;
	   }, 
	   error : function(result) { 
	      console.log("errrrrrrrrr");
	   } 
	 }); 


   votes_with_party_pct = "92.3%"; 
   end_date_of_position = "2019-01-03" //result["results"][0]["members"][0][""];
   leader_ship_role = "Minority Leader"; // result["results"][0]["members"][0][""];
   most_recent_twit = "RT @RepRichardNeal: You cannot upend the tax system without creating serious problems. We are already seeing the #GOPTaxScam creating many...";
   twit_account = "NancyPelosi";
   console.log("happy new year!");
   $('#most_recent_twit')[0]["innerHTML"] = most_recent_twit;
   $('#votes_with_party_pct')[0]["innerHTML"] = votes_with_party_pct;
   $('#end_date_of_position')[0]["innerHTML"] = end_date_of_position;
   $('#leader_ship_role')[0]["innerHTML"] = leader_ship_role;
   $('#twit_account')[0]["innerHTML"] = twit_account;

	
};


	$.ajax({ 
	   type : "GET", 
	   url : "https://api.propublica.org/congress/v1/115/senate/members.json", 
	   beforeSend: function(xhr){xhr.setRequestHeader('X-API-Key', 'IzJGY0q3AS4wImC3H3t4vGNLIdMuXC7Jn2CwArlc');},
	   success : function(result) { 
	       console.log(result);
	   }, 
	   error : function(result) { 
	   } 
	 }); 
