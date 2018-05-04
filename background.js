  // var config = {
  //   apiKey: "AIzaSyBE3kt0IizIPp9qk5Q4J7CIZIzcBThtOBM",
  //   authDomain: "cornell-tech.firebaseapp.com",
  //   databaseURL: "https://cornell-tech.firebaseio.com",
  //   projectId: "cornell-tech",
  //   storageBucket: "",
  //   messagingSenderId: "882311262231"
  // };
  // firebase.initializeApp(config);

// 'use strict';


// background.js
debugger;
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(tab.ib, {
    file: 'inject.js'
  });
  // Send a message to the active tab
  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //   var activeTab = tabs[0];
  //   chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  // });
  // console.log(window.getSelection().toString());
});



// This block is new!
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "open_new_tab" ) {
      chrome.tabs.create({"url": request.url});
    }
  }
);


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
/* create sniffer */
// $(document).ready(function() {
//   $('body').mouseup(function(event) {
//     console.log("get mouseup");
//     var selection = getSelected();
//         selection = $.trim(selection);
//         if(selection != ''){
//         $("span.popup-tag").css("display","block");
//         $("span.popup-tag").css("top",event.clientY);
//         $("span.popup-tag").css("left",event.clientX);
//         $("span.popup-tag").text(selection);
//         }else{
//         $("span.popup-tag").css("display","none");
//         }
//   });
// });

window.addEventListener("mouseup", function(event) { console.log("yea") });