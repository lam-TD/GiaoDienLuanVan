document.addEventListener("DOMContentLoaded",function () {
	//cuon chuot
	window.addEventListener("scroll",function(){
		var flag = false;
		if (window.pageYOffset > 56) 
		{
			document.getElementById('id-layer-top').classList.add('hidden-item');
			document.getElementById('id-layer-menu').classList.add('fixed-top-style-menu');
			document.getElementById('id-container').classList.add('id-container');
			document.getElementById('hidden-formSearch').style.display = "block";
			flag = true;
		}
		else
		{
			document.getElementById('id-layer-top').classList.remove('hidden-item');
			document.getElementById('id-layer-menu').classList.remove('fixed-top-style-menu');
			document.getElementById('id-container').classList.remove('id-container');
			document.getElementById('hidden-formSearch').style.display = "none";
			flag = false;
		}
	});
		
},false);