let itemForm = document.getElementById("itemForm");
itemForm.addEventListener("submit", addNewItem);
let output = document.getElementById("output");

// Get actual list from Local Storage
function fetchItemList(){
    return JSON.parse(localStorage.getItem('itemList'));
}

// Update Local Storage
function updateItemList(itemList){
    localStorage.setItem('itemList', JSON.stringify(itemList));
    showItems();
}

// Add new Item
function addNewItem(){
    event.preventDefault();
    item = document.getElementById('item').value;
    if(!fetchItemList()){
        let itemList = [];
        itemList.push(item);
        updateItemList(itemList);
    } else {
        let itemList = fetchItemList();
        itemList.push(item);
        updateItemList(itemList);
    }
}

// Display list of items
function showItems(){
    let itemList = fetchItemList();
    output.innerHTML ='';
    for(let i=0; i<itemList.length; i++){
        output.innerHTML += '<li class="list-group-item">'+itemList[i]+
        '<button onclick="removeItem(\''+itemList[i]+'\')" class="btn btn-danger float-right">Usuń</button>'+
        '<button onclick="displayEditItem(\''+itemList[i]+'\')" class="btn btn-success float-right">Edytuj</button>'+
        '</li>';
    }
    itemForm.reset();
    
    if(output.innerHTML == ''){
        output.innerHTML = 'Dodaj swoje pierwsze zadanie!';
    }
}

//Remove item from Local Storage
function removeItem(item){
    let itemList = fetchItemList();
    let index = itemList.indexOf(item);
    itemList.splice(index, 1);
    updateItemList(itemList);
}

//Display form for edition
function displayEditItem(item){
    document.getElementById("edit").innerHTML =
   `<form action="submit" id="editItemForm">
    <div class="form-group row">
      <label for="item" class="col-sm-4 col-form-label">Edytuj zadanie:</label>
      <div class="col-sm-8 input-group">
        <input class="form-control" type="text" id="editedItem">
        <div class="input-group-append">
          <button onclick="editItem('`+item+`')" class="btn btn-primary" id="sendEditedButton">Zapisz zmiany</button>
        </div>
      </div>
    </div>
  </form>`;
  document.getElementById("editedItem").value = item;
}

//Replace old item with new value in Local Storage
function editItem(item){
    event.preventDefault();
    let newItem = document.getElementById("editedItem").value;
    let itemList = fetchItemList();
    let index = itemList.indexOf(item);
    itemList[index] = newItem;
    updateItemList(itemList);
    document.getElementById("editItemForm").style.display = "none";
}