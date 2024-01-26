var id_count = 0;
function newItem() {

  var input_task = document.getElementById("input-task").value;
  var input_date = document.getElementById("input-date").value;
  if (input_task) {
    var ul = document.getElementById("myUL");
    var li = document.createElement("li");
    var div = document.createElement("div");
    var span1 = document.createElement("span");
    var span2 = document.createElement("span");
    var task = document.createTextNode(input_task);
    var dd = document.createTextNode(input_date);
    li.className = "li-sk";
    span1.appendChild(task);
    span2.appendChild(dd);
    span2.className = "li-align";
    div.className = "li-container";
    div.appendChild(span1);
    div.appendChild(span2);
    li.appendChild(div);
    ul.appendChild(li);


    var li = document.getElementsByClassName("li-sk");//  var i;
    for (let i = 0; i < li.length; i++) {
      li[i].onclick = function () {
        // this.parentElement.parentNode.remove();
        this.parentNode.removeChild(this);
        console.log("close button prressed")
      }
    }

    document.getElementById("input-task").value = "";
    document.getElementById("input-date").value = "";



  }
}


/*var li = document.getElementsByTagName("h3");
li.style.display ="none";*/

function deleteItem() {
  var ul = document.getElementById("myUL");
  console.log("delete button pressed")
  var li = document.getElementsByClassName("li-sk");
  for (i = 0; i < li.length; i++) {
    ul.removeChild(li[i]);
  }

}


//  var btn1 = document.getElementsByClassName("close");
//  for(let j=0 ; j<btn1.length; j++){
//   btn[i].onclick = function(){
//     this.parentNode.removeChild(this);
//   }
//  }