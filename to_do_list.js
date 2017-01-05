// get text from textarea
// create a prototype for ul "list"
// create a prototype for li 'list-item'
// create jamItHome

function toDoList() {
  this.items = [];
}

toDoList.prototype = {
  addItem: function(listItem) {
    this.items.push(listItem);
  }
}

function toDoListItem(itemText) {
  this.complete = false;
  this.text = itemText;
}

toDoListItem.prototype = {
  markComplete: function() {
    this.complete = true;
  }
}

myList = new toDoList();

document.addEventListener("submit",function(e){
  e.preventDefault();
  var inputText = document.getElementById("to-do-input").value;
  var myListItem = new toDoListItem(inputText);
  myList.addItem(myListItem);
  console.log(myList);
});
