window.setTimeout(function() {
var todos = [];
var input = prompt("What wouldyou like to do?");

  while(input !== "quit"){
    if(input === "list"){
        console.log(todos);
    } 
    else if(input === "new"){
        //ask for new todo
        var newTodo = prompt("Enter new Todo");
        //add new todo
        todos.push(newTodo);  
    }
    input = prompt("What wouldyou like to do?");
  }
  console.log("OK, You quit app."); 
  }, 500);