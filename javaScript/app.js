var input = document.getElementById("input");
var listContainer =document.getElementById("list-sec");
var histryContainer = document.getElementById("histry-sec");
var todos = [];
var items = document.getElementById("items")

function addHandler(){
  todos.push(input.value);
  showListHandler();
  console.log(todos)
  input.value = "";
}
  function showListHandler(){
    listContainer.innerHTML = "";
    items.innerHTML = todos.length;
    for(var index = 0; index < todos.length; index++){
      var list  = document.createElement("div");
      listContainer.appendChild(list);
      list.setAttribute("class", "list-div")
      var listText = document.createElement("p");
      list.appendChild(listText);
      listText.setAttribute("class", "text")
      listText.innerHTML = todos[index];

      var buttonContainer = document.createElement("div");
      list.appendChild(buttonContainer);
      buttonContainer.setAttribute("class", "btns-container");
      var editButton = document.createElement("button");
      buttonContainer.appendChild(editButton);
      editButton.setAttribute("class", "edit-btn");
      editButton.setAttribute("onClick", `editHandler(${index})`)
      var editIcon = document.createElement("img");
      editButton.appendChild(editIcon);
      editIcon.setAttribute("src", "./icons/editBtn.png");
      editIcon.setAttribute("class", "edit-icon");
      
      var deleteButton = document.createElement("button");
      buttonContainer.appendChild(deleteButton);
      deleteButton.setAttribute("class", "dlt-btn");
      deleteButton.setAttribute("onClick", `deleteHandler(${index})`)
      var deleteIcon = document.createElement("img");
      deleteButton.appendChild(deleteIcon);
      deleteIcon.setAttribute("src", "./icons/trash.png");
      deleteIcon.setAttribute("class", "dlt-icon");
    }
  }

  function editHandler(index){
    var editTodo = prompt("Edit Value", todos[index]);
    if(editTodo === null){
      todos[index] = editTodo.value;
    } else{
      todos[index] = editTodo;
      console.log(todos);
      showListHandler();
    }
  }



  function deleteHandler(index){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        todos.splice(index, 1);
        showListHandler();
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
  }

  function deleteAllhandler(){
    listContainer.innerHTML = ""
  }