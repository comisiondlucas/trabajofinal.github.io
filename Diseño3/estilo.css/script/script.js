function saludo() {
    
    var nombre = prompt("Por favor, ingrese su nombre:");
  
    
    if (nombre !== null && nombre !== "") {
      
      alert("¡Bienvenido, " + nombre + "!");
    } else {
      
      alert("Por favor, ingrese su nombre.");
    }
  }
  
  
  saludo();
  