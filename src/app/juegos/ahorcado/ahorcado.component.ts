import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private toastr: ToastrService) { 
    this.iniciarJuego();
  }

  ngOnInit(): void {
  }

  iniciarJuego(){
    this.palabraSecreta = this.palabras[Math.floor(Math.random() * this.palabras.length)];
    console.log(this.palabraSecreta);
    this.palabraActual = '_ '.repeat(this.palabraSecreta.length);
    this.intentosUs = 6;
    this.letrasUsadas = [];
  }


  intentarLetra(letra: string) {
    let nuevaPalabra = '';

    if (this.letrasUsadas.includes(letra)) {
      return;
    }

    this.letrasUsadas.push(letra);

    if (this.palabraSecreta.includes(letra)) {
      for (let i = 0; i < this.palabraSecreta.length; i++) {
        if (this.palabraSecreta[i] === letra) {
          nuevaPalabra += letra + ' ';
        } else {
          nuevaPalabra += this.palabraActual[i * 2] + ' '; 
        }
      }
    } else {
      this.intentosUs--;

      for (let i = 0; i < this.palabraSecreta.length; i++) {
        nuevaPalabra += this.palabraActual[i * 2] + ' '; 
      }
    }

    this.palabraActual = nuevaPalabra.trim();

    this.checkWin();
  }

  checkWin(){
    if (!this.palabraActual.includes('_')) {
      this.toastr.success('¡Ganaste! La palabra era: ' + this.palabraSecreta, 'Ganaste');
      this.iniciarJuego();
    } else if (this.intentosUs === 0) {
      this.toastr.error('¡Perdiste! La palabra secreta era: ' + this.palabraSecreta, 'Perdiste');
      this.iniciarJuego();
    }
  }
}



