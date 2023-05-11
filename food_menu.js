// Mini-Project page 68
"use strcit";

let menu = {
    drinks : [
     "Water", "Tea", "Sweet Tea",
     "Coke", "Dr. Pepper", "Sprite"
     ],
    entrees : [
    "Hamburger w/ Fries",
     "Grilled Cheese w/ Tater Tots",
    "Grilled Chicken w/ Veggies",
     "Chicken Fried Steak w/ Mashed Potatoes",
    "Fried Shrimp w/ Coleslaw",
     "Veggie Plate"
    ],
    desserts: [
     "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
     ]
};

window.onload = function() {
    const menuCategoryList = document.getElementById("menuCategoryList");
    menuCategoryList.onchange = onMenuCategorySelectionChanged;
};

function onMenuCategorySelectionChanged() {
    const menuItemsList = document.getElementById("menuItemsList");
    const index = document.getElementById("menuCategoryList").selectedIndex;
    const selectedValue = document.getElementsByTagName("option")[index].value;
    let list = [];
    document.getElementById("menuItemsList").innerHTML = "";
    if(selectedValue == "drinks"){
        list = menu.drinks;
    }
    else if(selectedValue == "entrees"){
        list = menu.entrees;
    }
    else if(selectedValue == "desserts"){
        list = menu.desserts;
    }
    for (let i = 0; i < list.length; i++) {
        menuItemsList.size = list.length;
        let theOption = new Option(list[i]);
        menuItemsList.appendChild(theOption);
    }
}