var btn = document.getElementsByClassName("btn")[0];
var btnbox = document.getElementsByClassName("btnbox")[0];
btn.onmousedown = function(ev){
	var oEvent = ev || event;
	var x = oEvent.clientx - btnbox.offsetleft;
	var left;
	document.onmousemove = function(ev){
    	var oEvent = ev || event;
        var xl = oEvent.clientx - x;
		btnbox.style.left = xl + "px";
		left = xl;
	};
	document.onmouseup = function(ev){
		document.onmousedown = null;
		document.onmousemove = null;
		if (left == 200){
			alert("验证通过");
		}else{
			alert("验证失败");
			btnbox.style.left = "40px";
		};
	};
};
