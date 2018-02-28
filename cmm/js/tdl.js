document.addEventListener("DOMContentLoaded",function () {
	var btn = document.getElementsByClassName('selectItem');
	console.log(btn);
	for (var i = 0; i < btn.length; i++) {
		btn[i].onclick = function () {
			// console.log("Chay r");
			console.log(this.getAttribute('data-name'));
			document.getElementById('btn-select').value = this.getAttribute('data-name');
			document.getElementById("select-content-id").style.display = "none";
		}
	}
},false);