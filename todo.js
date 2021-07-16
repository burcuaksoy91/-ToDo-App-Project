
window.onload = () => add_text.autofocus ;

const add_text = document.getElementById("add_text");
const add_btn = document.getElementById("add_btn");
const list = document.getElementsByClassName("todo");



add_btn.addEventListener("click", function () {
    if (add_text.value=="") {
        alert("Please enter a task")
    }else{
    
    const div = document.createElement("div");
    div.className="todo";
    div.style.marginLeft = "30%";
    div.style.marginBottom = "2%";
    div.id="div_list";

    const check_box = document.createElement("input");
    check_box.setAttribute("type", "checkbox");
    check_box.style.cursor = "pointer";
    check_box.style.width= "30px";
    check_box.style.height= "30px";
    check_box.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px";
    
    

    const label = document.createElement("label");
    label.textContent =add_text.value;
    label.className= "add_text";
    
    label.addEventListener("mouseover", function(){
        label.style.cursor="pointer";
        label.style.opacity="0.6px";
    })
    label.addEventListener("click", function(){
        check_box.checked  })


    const trash = document.createElement("i");
    trash.setAttribute("className","far fa-trash-alt");
    trash.className ="far fa-trash-alt";
    trash.id="trash";
   
    
    
    document.body.appendChild(div);
    div.appendChild(check_box);
    div.appendChild(label);
    div.appendChild(trash);


    check_box.addEventListener("click", function(){
        check_box.checked ? label.className= "checked" : label.className ="add_text";
    })

    trash.addEventListener("click", function(){
        div.remove();
        add_text.value ="";
    })

 
}
})

add_text.addEventListener("click", function(){
    add_text.value="";
})

