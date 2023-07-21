//your JS code here. If required.
const item = document.getElementById("colorSelect");
const button = document.getElementsByTagName("div")[0];

function removeItem(){
	if(item.value) item.remove(item.value);
}