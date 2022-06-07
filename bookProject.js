
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



// deleteClick.addEventListener()


