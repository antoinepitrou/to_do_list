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
  },
  extractItem: function(itemId) {
    for (var i=0;i<this.items.length;i++) {
      var item = this.items[i];
      if (item.id === parseInt(itemId)) {
        return item;
      }
    }
  }
}

function toDoListItem(itemText, id) {
  this.complete = false;
  this.text = itemText;
  this.id = id;
}

toDoListItem.prototype = {
  markComplete: function() {
    this.complete = true;
  },
  render: function() {
    var li = document.createElement("li");
    var input = document.createElement("input");
    li.classList.add("to-do-list-item");
    if (this.complete) {
      li.classList.add("completed");
      input.setAttribute("checked", this.complete);
    }
    li.setAttribute("data-id", this.id);
    input.setAttribute("type","checkbox");
    li.textContent = this.text;
    li.appendChild(input);
    return li;
  }
}

myList = new toDoList();
listItemCounter = 0;

document.addEventListener("submit",function(e){
  e.preventDefault();
  var inputText = document.getElementById("to-do-input").value;
  listItemCounter++;
  var myListItem = new toDoListItem(inputText, listItemCounter);
  myList.addItem(myListItem);
  console.log(myList);
  myList.injectToDom();
});

document.getElementById("to-do-list").addEventListener("change", function(e){
  var itemId = e.target.parentNode.dataset.id;
  var item = myList.extractItem(itemId);
  item.markComplete();
  myList.injectToDom();
})
