const createTagButton = (tag) => {
    let button = document.createElement("p");
    button.innerHTML = `#${tag}`;
    button.classList.add("btn-primary", "btn", "me-1");
    return button;
  };
  
  const capitalizeLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };
  
  const printTagButtons = (tags, wrapperId) => {
    let wrapper = document.getElementById(wrapperId);
    wrapper.innerHTML = "";
    tags.forEach((tag) => {
      let button = createTagButton(capitalizeLetter(tag));
      wrapper.append(button);
    });
  };
  
  /* 
  como obtener los tags de una entrada 
  Defino mi campo de entrada
  Espero a que mi campo de entrada cambie
  Si detecto una coma en mi campo de entrada
      Obtengo el tag
      Creo un botón con el tag
      Agrego el botón a mi lista de tags
      Limpio mi campo de entrada
      Agrego el tag a mi lista de tags
      mando a imprimir la lista de tags dentro de mi contenedor de tags
  */
  

  
  export {printTagButtons}