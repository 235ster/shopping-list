var button = document.getElementById("enter");
var newItem = document.getElementById("newItem");
var ul=document.querySelector("ul");


function lengthchck(){
	return newItem.value.trim().length;
	}

function createListItem(){
		var div=document.createElement("div");
		var li=document.createElement("li");
		var btn=document.createElement("button");
		li.appendChild(document.createTextNode(newItem.value))
		btn.appendChild(document.createTextNode("delete"));
		div.appendChild(li);
		div.appendChild(btn);
		ul.appendChild(div);
		newItem.value="";
		}

function addItemAfterClick(){
	if (lengthchck() > 0){
		createListItem();
		}
	}

function addItemafterKeyPress(event){
	if (lengthchck() > 0 && event.keyCode===13){
		createListItem();
		}
	}

ul.addEventListener("click", function(event){
	if(event.target.tagName==="LI"){
	event.target.classList.toggle("done");
	}else{
		ul.removeChild(event.target.parentElement);
	}
	})

button.addEventListener("click", addItemAfterClick);

newItem.addEventListener("keypress",addItemafterKeyPress);



