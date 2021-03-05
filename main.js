name_of_the_pizza_array = [];
var name_1 = document.getElementById("name_of_the_pizza_1").value;
var name_2 = document.getElementById("name_of_the_pizza_2").value;
var name_3 = document.getElementById("name_of_the_pizza_3").value;
var name_4 = document.getElementById("name_of_the_pizza_4").value;
name_of_the_pizza_array.push(name_1);
name_of_the_pizza_array.push(name_2);
name_of_the_pizza_array.push(name_3);
name_of_the_pizza_array.push(name_4);
document.getElementById("display_name").innerHTML = name_of_the_pizza_array;
menu_list_array = ["Chicken Tandoori Pizza",
    "Veg Supreme Pizza",
    "Deloxe Veggie Pizza",
    "Veg Extravaganza Pizza"];


function getmenu() {
    var htmldata;
    htmldata = "<ol class='menulist'>"
    manu_list_array.sort();
    for (var i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata + '<li>' + menu_list_array[i] + '</li>'
    }
    htmldata = htmldata + "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmkdara+'<div class="card">' + '<img src="images/pizzaImg.png"/>' + menu_list_array[i] + '</div>'
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}