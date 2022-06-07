/*
 // add title  or changing element content

var changeTitle = document.querySelectorAll("#book-list li span");

console.log(changeTitle);//

//looping  li items 

Array.from(changeTitle).forEach(function(item){
    // console.log(item);
    // console.log(item.innerHTML);
    //console.log(item.textContent);

    item.textContent += "  ....(prog_lang)";

})  
*/

// Delete  Option and it going to delete when click the delete button


var deleteClick = document.querySelectorAll("#book-list li button");
console.log(deleteClick);
deleteClick.forEach(function(e){
    // console.log(e);
    e.addEventListener('click', function(item){
    
        const li = item.target.parentElement;
        li.parentNode.removeChild(li);

    })
});



// Adding book from input field
var addBook = document.forms['add-book'];
console.log(addBook);

addBook.addEventListener('submit',function(e){
    e.preventDefault();
    //get the value from input
    var ul = document.querySelector("#book-list ul")
    
    var value = addBook.querySelector("input[type='text']").value;
     // console.log(value);

    // add elements to dom

    const liNew = document.createElement('li');
    const bookName = document.createElement('span');
    const deletebtn = document.createElement('button');

    //ADD CONTENT TO ELEMENTS  
    bookName.textContent = value;
    deletebtn.textContent = 'delete';

    // Add classes to  Elements
    bookName.classList.add('name');
    deletebtn.classList.add('delete');

   //append  to document 
   liNew.appendChild(bookName);
   liNew.appendChild(deletebtn);
   ul.appendChild(liNew);
//  console.log(liNew.parentElement);
   
});


