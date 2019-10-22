var todos = [];
window.setTimeout(function() {
var input = prompt("What would you like to do?");

  while(input !== "quit"){
    if(input === "list"){
      listTodos(); 
    } 
    else if(input === "new"){
     addTodo();  
    } 
    else if(input === "delete"){
      deleteTodo();
    }
    input = prompt("What would you like to do?");
  }
  console.log("OK, You quit app."); 
  
  }, 500);

  function listTodos(){
    console.log("****************");
    todos.forEach(function(todo, i){
      console.log(i + ": " + todo);
    });
    console.log("****************");
  }
  function addTodo(){
     //ask for new todo
     var newTodo = prompt("Enter new Todo:");
     //add new todo
     todos.push(newTodo);  
     console.log("Added ToDo");
  }
  function deleteTodo(){
    var index = prompt("Enter index to delete:");
    todos.splice(index, 1);
    console.log("Deleted ToDo");
  }