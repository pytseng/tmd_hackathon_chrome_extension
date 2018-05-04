(function() {
	console.log("injecting");
	// just place a div at top right
	var div = document.createElement('div');
	div.style.width="160px";
	div.style.backgroundColor="#555";
	div.style.color="#fff";
	div.style.zIndex="1";
	div.style.display="inline";
	// div.style.position='relative';
	div.textAlign="center";
	div.style.borderRadius="6px";
	div.style.padding="8px 0";
	div.style.bottom="125%";
	div.style.left="50%";
	div.style.marginLeft="-80px";
	div.textContent='Injected!';
	// document.body.appendChild(div);
	// window.getSelection().toString()
	// window.getSelection().appendChild(div);
	window.getSelection().focusNode.parentElement.appendChild(div);
	// alert('inserted self... giggity');

})();




