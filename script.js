let i = 0;
function add(){
    
    let new_text;
    let _input = document.getElementById("m_input").value 
    if(document.getElementById("m_input").value === ""){
        i-=1
    }
    else{
    
     //console.log(input)
    let new_tag = document.createElement("p")
   
    if (i === 0){
        new_text = document.createTextNode(_input)
    }
    else{
        new_text = document.createTextNode(" - "+_input)
    }
    let struct = new_text
    new_tag.value = struct
    new_tag.appendChild(new_text)
    
    let element = document.getElementById("note")
    element.appendChild(new_tag);
    
    
   document.getElementById("m_input").value = ""
    //window.location.href = "index.html"   

    }
    i = i+1
    
    
}

let refresh = () =>{
    let val = document.getElementById("note").innerHTML
    if (val === "")
    {
    
    }
    
    else{
    document.getElementById("h_note").innerHTML = ""
    document.getElementById("note").innerHTML = ""
    i = 0
    //window.location.reload(true)
    }
}
function add_h()
{   
    if (document.getElementById("h_input").value===""){

    }
    else{
    let new_heading = document.getElementById("h_input").value
    if( document.getElementById("h_note").innerHTML === ""){
    let new_tag_h = document.createElement("h2")
    let new_text_h = document.createTextNode(new_heading)
    new_tag_h.appendChild(new_text_h)
    let element_ = document.getElementById("h_note")
    element_.appendChild(new_tag_h)
    document.getElementById("h_input").value = ""
    
    
}   
else{
    

}
}
}
