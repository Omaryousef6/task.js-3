var inputName = document.getElementById("inputName");
var inputUrl = document.getElementById("inputUrl");
var inputClose = document.getElementById("btnInput")

var dataList = [];

if (localStorage.getItem("EntarUser") != null) {
  dataList = JSON.parse(localStorage.getItem("EntarUser"));

  displayData();
}

function addData() {
  
    if (valditionName() && valditionUrl()) {
      var dataUser = {
        siteName: inputName.value,
        siteUrl: inputUrl.value,
      };
    
      dataList.push(dataUser);
      localStorage.setItem("EntarUser", JSON.stringify(dataList));
      displayData();
      clearInput();  
    }else{
      inputClose.classList.remove("d-none")
    }
  }
  

function displayData() {
  var itemData = "";

  for (var i = 0; i < dataList.length; i++) {
    itemData += `<tr>
        <td>${i + 1}</td>
        <td>${dataList[i].siteName}</td>
        <td>
        <button class="  btn btn-primary "> 
          <a class="text-white visited" href="${dataList[i].siteUrl}">
          <i class="fa-regular fa-eye"></i> Visit
          </a>
        </button>
        </td>
        <td><button onclick = "deleteData(${i})" id="btnDelete" class="btn btn-dark ">
        <i class="fa-regular fa-trash-can"></i>
        Delete
        </button></td>
        </tr>`;
  }
  document.getElementById("dataTable").innerHTML = itemData;
}

function clearInput() {
  inputName.value = "";
  inputUrl.value = "";
}

function deleteData(index) {
  dataList.splice(index, 1);
  localStorage.setItem("EntarUser", JSON.stringify(dataList));
  displayData();
}

function visitUrl(indexUrl) {
  window.open(dataList[indexUrl].siteUrl);
}


// validtion

function valditionName(){
  var text = inputName.value
  var regexName = /\w{4,20}/;
  
  if (regexName.test(text) ) {
    inputName.classList.add("is-valid")
    inputName.classList.remove("is-invalid")
    
    return true
  }else{
    inputName.classList.add("is-invalid")
    inputName.classList.remove("is-valid")
    

    return false
  }
}

function valditionUrl(){
  var textUrl = inputUrl.value
  var regexUrl =   /^(https?:\/\/)?(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

  if(regexUrl.test(textUrl)){
    inputUrl.classList.add("is-valid")
    inputUrl.classList.remove("is-invalid")
    
    return true
   
  }else{
    inputUrl.classList.add("is-invalid")
    inputUrl.classList.remove("is-valid")

    return false
  }
}


function closeInput(){

  inputClose.classList.add("d-none")

}