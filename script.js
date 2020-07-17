var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteBtns=document.getElementsByClassName("delete");
var li = document.getElementsByTagName("li");


//add listner to all buttons

for(var i=0;i<deleteBtns.length;i++)
{
	deleteBtns[i].addEventListener("click",removeList,false);
}
function removeList(evt)
{
	if(evt.target && evt.target.nodeName=="BUTTON")
	{
	//evt.target.removeEventListner("click",removeList,false);
	evt.target.parentNode.remove();
    }
}

function inputLength() {
	return input.value.length;
}


function createListElement() {
	var btn=document.createElement("button");
	btn.innerHTML="Delete";
	btn.onclick = removeList;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(btn);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function strike(e){
	if(e.target && e.target.nodeName=="LI")
	{
        e.target.classList.toggle("done");
	}

}
 

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click",strike);


