import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  intentosUs:number = 0;
  dicc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ', 
  'O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  palabras = ['ELEFANTE','COMPUTADORA', 'MONTAÑA', 'PLAYA', 'HELADO', 'GUITARRA',
            'TREN', 'VERANO', 'PIZZA', 'ESPACIO'];
  palabraSecreta: string='';
  palabraActual: string='';
  letrasUsadas: string[] = [];

  constructor() { 
    this.iniciarJuego();
  }

  ngOnInit(): void {
  }

  iniciarJuego(){
    this.palabraSecreta = this.palabras[Math.floor(Math.random() * this.palabras.length)];
    this.palabraActual = '_'.repeat(this.palabraSecreta.length);
    this.intentosUs = 6;
    this.letrasUsadas = [];
  }


  intentarLetra(letra: string) {
    if (this.letrasUsadas.includes(letra)) {
      return;
    }

    this.letrasUsadas.push(letra);

    if (this.palabraSecreta.includes(letra)) {
      for (let i = 0; i < this.palabraSecreta.length; i++) {
        if (this.palabraSecreta[i] === letra) {
          this.palabraActual = this.palabraActual.substring(0, i) + letra + this.palabraActual.substring(i + 1);
        }
      }
    } else {
      this.intentosUs--;
    }

    if (this.palabraActual === this.palabraSecreta) {
      alert('¡Has ganado!');
      this.iniciarJuego();
    } else if (this.intentosUs === 0) {
      alert('¡Has perdido! La palabra secreta era: ' + this.palabraSecreta);
      this.iniciarJuego();
    }
  }


}
