document.addEventListener("DOMContentLoaded",function () {
	//cuon select TinhTp
	var btn = document.getElementsByClassName('selectItem');
	for (var i = 0; i < btn.length; i++) {
		btn[i].onclick = function () {
			// console.log("Chay r");
			// console.log(this.getAttribute('data-name'));
			document.getElementById('btn-select').value = this.getAttribute('data-name');
			document.getElementById("select-content-id").style.display = "none";
		}
	}

	// toggle filter-search
	var textSearch = document.getElementById("id-btn-filter");
	textSearch.onclick = function(){
		document.getElementById("id-filter-content").classList.toggle("hienthi-nhe");
	}

	// chon bo loc
	var btnSearch = document.getElementById("id-btn-timkiem");
	btnSearch.onclick = function(){
		var boloc = document.getElementsByName("khuvuc");
		var result = 0;
		for (var i = 0; i < boloc.length; i++) {
			if (boloc[i].checked == true) 
			{
				result++;
			}
		}
		document.getElementById("icon-bo-loc").style.display = "none";
		document.getElementById("id-btn-filter").innerHTML = '<span style="color:red;width:20px;height:20px; font-size:14px;">' + 'Bộ lọc ' + result +'</span>';

		document.getElementById("id-filter-content").classList.remove("hienthi-nhe"); // hihe id-filter-content
	}

		
},false);