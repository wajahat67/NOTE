

    /*
     Générer un élement div de classe "note" dans le body 
     Dans celui-ci , générer un élement de classe "handle" et un élement de type "textarea"
     Dans l'élément de classe "handle" générer un élément de type "button" et de classe "delete-button"
      contenant le symbole "fois"(code : &times) 

      > Tout doit directement etre stocké dans des variable donc utiliser la manière createElement /
      appendChild

    */


      function create_note(x , y) {

      var new_note = document.createElement("div");
      new_note.classList.add ("note");
      document.body.appendChild(new_note);

      new_note.style.top = y + "px";
      new_note.style.left = x + "px";
      
      
      var new_handle = document.createElement("div");
      new_handle.classList.add("handle");
      new_note.appendChild(new_handle);

      var new_textarea = document.createElement("textarea");
      new_note.appendChild(new_textarea);

      new_textarea.style.height = "100%";
      new_textarea.oninput = auto_resize;
      new_textarea.focus();

      new_textarea.onblur = function() {
        alert("blur");
        save_note(new_note);
      }

      new_note.textarea = new_textarea; // on donne une propriéte personnalisées à notre note, qui sera un  accès direct à son champs
     

      var new_delete_btn = document.createElement("button");
      new_delete_btn.classList.add("delete_button");
      new_delete_btn.innerHTML = "&times;";
      new_handle.appendChild(new_delete_btn);

      new_delete_btn.onclick = function(){
        delete_note(new_note);
      }

      $(new_note).draggable();



      return new_note;

}


window.ondblclick = function(e) {
   
    create_note(e.clientX , e.clientY);

}



function auto_resize(e) {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
    }


    function delete_note(note_to_delete) {

       if (confirm("Supprimer cette note ?")) 
        // document.body.removeChild(note_to_delete);
        
       { // ce test se vérifie une fois que le bouton "ok" a ete clique

        note_to_delete.parentElement.removeChild(note_to_delete);
       }
       
    }

    


// Fonction de sauvegarde de données


function save_note(note_to_save) {
alert("save");

  console.log(note_to_save.textarea)

  $.ajax("php/save_note.php" , 
  {
    data:{
      content: note_to_save.textarea.value
    },
    mathod:"post" , success: function(){
      alert("ok");
    }
  }
  );
}
