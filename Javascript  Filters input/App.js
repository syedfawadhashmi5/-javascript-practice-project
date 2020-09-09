var filterItem = document.getElementById("myInput");
var listItem = document.getElementById("myUL");



function myFubction() {
    var filter = filterItem.value.toLowerCase();
    var list   = listItem.childNodes;

    for(var i = 0 ; i < list.length; i++){
        if(list[i].nodeType === 1){
            var itemsList = list[i].innerHTML.toLowerCase(); 
            if(itemsList.indexOf(filter) != -1){

                list[i].style.display = '';

            }else{
                list[i].style.display = 'none';

            }
        }
    }
}



