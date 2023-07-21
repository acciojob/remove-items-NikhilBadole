//your JS code here. If required.
const item = document.getElementById("colorSelect");
const button = document.getElementsByTagName("div")[0];

function removeItem(){
	const value = item.value;
	for(let i=0;i<item.length;i++){
		if(item.value === value) item.remove(item.value);
	}
}