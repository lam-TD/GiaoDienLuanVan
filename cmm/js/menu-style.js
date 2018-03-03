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

	// select button
	var btnSelect = document.getElementsByClassName('btn-select');
	var aSelect = document.getElementsByClassName('a-select');
	var andi =  document.getElementsByClassName('select-content');

	for (var i = 0; i < aSelect.length; i++) {
		var oldAtt = "";
		aSelect[i].onclick = function(){
			for (var j = 0; j < aSelect.length; j++) { aSelect[j].classList.remove('click-select'); }
			var hien_len = this.getAttribute("data-hienthi");
			
			if (oldAtt == hien_len) 
			{
				this.classList.remove('click-select');
				oldAtt = "";
				var phan_hien_len = document.getElementById(hien_len);
				for (var k = 0; k < andi.length; k++) {
					andi[k].classList.remove('hienthi');
				}
				phan_hien_len.classList.remove('hienthi');
			}
			else
			{
				this.classList.add('click-select');
				oldAtt = hien_len;
				var phan_hien_len = document.getElementById(hien_len);
				for (var k = 0; k < andi.length; k++) {
					andi[k].classList.remove('hienthi');
				}
				phan_hien_len.classList.add('hienthi');
			}
			
		}
	}

	// select item TinhTp
	var select_Item = document.getElementsByClassName('selectItem');
	for (var i = 0; i < select_Item.length; i++) {
		select_Item[i].onclick = function () {
			document.getElementById('a-tinhTP').innerHTML = this.getAttribute('data-name') + ' <i class="fas fa-angle-down"></i>';
			document.getElementsByClassName('btn-select')[0].classList.remove('click-select');
			document.getElementsByClassName('a-select')[0].classList.remove('hienthi');
		}
	}

	// select item danh muc
	var select_Item2 = document.getElementsByClassName('selectItem2');
	for (var i = 0; i < select_Item2.length; i++) {
		select_Item2[i].onclick = function () {
			document.getElementById('a-danhmuc').innerHTML = this.getAttribute('data-name') + ' <i class="fas fa-angle-down"></i>';
			document.getElementsByClassName('btn-select')[1].classList.remove('click-select');
			document.getElementsByClassName('select-content')[1].classList.remove('hienthi');
			console.log(document.getElementsByClassName('select-content'));
		}
	}
	
	// form login
	var modal = document.getElementById('id01');
	document.getElementById('btn-dangnhap').onclick = function(){
		document.getElementById('id01').style.display = "block";
	}
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}

},false);