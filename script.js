//your JS code here. If required.
const item = document.getElementById("colorSelect");
const button = document.getElementsByTagName("div")[0];

function removeItem(){
	const index = item.selectedIndex;

	if(index !== -1){
		item.remove(index)
	}
}