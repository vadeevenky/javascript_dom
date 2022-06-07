
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