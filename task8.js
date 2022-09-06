
var form=document.getElementById('addForm')
var itemList=document.getElementById('items')
console.log(itemList)

form.addEventListener('submit',addItem);
// Delete event
itemList.addEventListener('click', removeItem);

function addItem(e){
    e.preventDefault()
    

//to get the input value
var newItem=document.getElementById('item').value
//create a new li element
var li=document.createElement('li')
//add class
li.className='list-group-item'
//add text node with input value
li.appendChild(document.createTextNode(newItem))

 // Create del button element
var deleteBtn = document.createElement('button');

 // Add classes to del button
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

 // Append text node
deleteBtn.appendChild(document.createTextNode('delete'));

 // Append button to li
li.appendChild(deleteBtn);

//append li to list
itemList.append(li)
}

// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }
  