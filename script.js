//your JS code here. If required.
function conandAlert(){
const okey = document.getElementById("ok");
const canCel = document.getElementById("cancel");
 

	okey.addEventListener("click",function(){
		 const configconfirmed = confirm("Do you want to proceed?");
		if(configconfirmed)
		alert("You clicked OK. Proceeding...");
		else{
			alert("You clicked Cancel. Exiting...");
		}
	});
}
conandAlert();