 // Jugador , PC , combinaciones de Juegos
        //Piedra = 1 , Papel = 2 , Tijeras = 3
        //Forma Propia
        //El computador elige de forma aleatoria.
        //let computador = Math.floor(Math.random() * (3 * 1 + 1) + 1);
        //Forma Platzi
        // let min = 1; // let max = 3;
  
        // let computador = Math.floor(Math.random()* (max * min + min) + min); //Forma Platzi 2 - con funcion
  
        function aleatorio(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
    
          function eleccion(jugada) {
                let resultado = "";
                if (jugada == 1) {
                resultado = "β";
                } else if (jugada == 2) {
                resultado = "π";
                } else if (jugada == 3) {
                resultado = "βοΈ";
                } else {
                resultado = "MAL ELEGIDO";
                }
                return resultado;
          }
    
          function combate(pc, jugador) {
                let desenlace = "";
                if (pc == jugador) {
                desenlace = "EMPATE π€";
                } else if (jugador == 1 && pc == 3 || jugador == 2 && pc == 1 || jugador == 3 && pc == 2) {
                desenlace = "GANASTE π";
                triunfos++;
                } else {
                desenlace = "PERDISTE π£";
                perdidas++;
                }
                return desenlace;
          }
    
          // 1 es piedra, 2 es papel, 3 es tijera
          let jugador = 0;
          let pc = 0;
          let triunfos = 0;
          let perdidas = 0;
    
          while (triunfos < 3 && perdidas < 3) {
                pc = aleatorio(1, 3);
                jugador = prompt("Elige: 1 para β, 2 para π°, 3 para βοΈ");
                // alert("Elegiste " + jugador)
        
                alert("PC elige " + eleccion(pc));
                alert("TΓΊ eliges " + eleccion(jugador));
        
                // COMBATE
                alert("Tu " + combate(pc, jugador));
          }
    
          alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.");