var val = document.getElementById("val");
list = document.getElementById("node_text");

function addItems() {

    // create LI and add function

    var li = document.createElement("li");
    var li_textNode = document.createTextNode(val.value);
    li.appendChild(li_textNode);
    document.getElementById("node_text");
    node_text.appendChild(li);
    val.value = "";

        // create delete button

    var button = document.createElement("button");
    var Button_textNode = document.createTextNode("Delete Button");

    button.appendChild(Button_textNode);
    button.setAttribute('onclick' , "deletelist(this)");
    li.appendChild(button);

            // create edit 

            var Edit = document.createElement("button");
            var EditNode = document.createTextNode("Edit Items");
            
            Edit.setAttribute('onclick' , "eiditList(this)");

            Edit.appendChild(EditNode);
            li.appendChild(Edit);




}

function deletelist(e) {
    e.parentNode.remove();
}

        // create delete All button function

function deleteAll() {

    list.innerHTML = "";
}


        // create edit button function

function eiditList(e) {

    var val =  e.parentNode.firstChild.nodeValue;
    var editValue = prompt("edit your value", val );

    e.parentNode.firstChild.nodeValue = editValue;
}
    