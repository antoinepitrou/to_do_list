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
  },
  render: function() {
    var ul = document.createElement("ul");
    this.items.forEach(function(item){
      ul.appendChild(item.render());
    })
    return ul;
  },
  injectToDom: function() {
    var toDoListDiv = document.getElementById("to-do-list");
    toDoListDiv.innerHTML = "";
    toDoListDiv.appendChild(this.render());
  }
}

function toDoListItem(itemText) {
  this.complete = false;
  this.text = itemText;
}

toDoListItem.prototype = {
  markComplete: function() {
    this.complete = true;
  },
  render: function() {
    var li = document.createElement("li");
    var input = document.createElement("input");
    li.setAttribute("class", "to-do-list-item");
    input.setAttribute("type","checkbox");
    input.setAttribute("value", this.complete);
    li.textContent = this.text;
    li.appendChild(input);
    return li;
  }

}

myList = new toDoList();

// function injectList(listItem) {
//   var li = document.createElement("li");
//   var input = document.createElement("input");
//   li.setAttribute("class", "to-do-list-item");
//   input.setAttribute("type","checkbox");
//   input.setAttribute("value", listItem.complete);
//   li.textContent = listItem.text;
//   ul.appendChild(li).appendChild(input);
// }

document.addEventListener("submit",function(e){
  e.preventDefault();
  var inputText = document.getElementById("to-do-input").value;
  var myListItem = new toDoListItem(inputText);
  myList.addItem(myListItem);
  console.log(myList);
  myList.injectToDom();
});
