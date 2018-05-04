function getSelected() {
	if(window.getSelection) { return window.getSelection(); }
	else if(document.getSelection) { return document.getSelection(); }
	else {
		var selection = document.selection && document.selection.createRange();
		if(selection.text) { return selection.text; }
		return false;
	}
	return false;
}

// (function(){
// $("<div id='aBox'></div>").appendTo($("body"));	
// })();

// window.addEventListener("mouseup", function(event) { 
// 	var selection = getSelected().toString().toLowerCase();	
// 	var div = $("#aBox").detach();
// 	$(div).attr({
// 		"width":"160px",
// 		"backgroundColor":"#555",
// 		"textContent":"Injected"
// 	});
	
// 	// div.textContent='Injected!';
// 	// div.style.position = "absolute";
// 	// div.style.width="160px";
// 	// div.style.backgroundColor="#555";
// 	// div.style.color="#fff";
// 	// div.style.zIndex="999";
// 	// div.style.display="in-line";
// 	// div.style.position='relative';
// 	// div.textAlign="center";
// 	$("#aBox").detach().appendTo(window.getSelection().focusNode);
// 	// console.log(selection);
// 	if (selection == "rand paul"){
// 		window.getSelection().focusNode.parentElement.appendChild(div);
// 	}
// });

// chrome.tabs.executeScript( {
//     code: "window.getSelection().toString();"
// }, function(selection) {
// 	debugger;
// 	console.log(selection);
//     document.getElementById("output").innerHTML = selection[0];
// });

