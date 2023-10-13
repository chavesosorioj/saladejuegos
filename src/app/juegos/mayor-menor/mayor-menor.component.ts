import { Component, OnInit } from '@angular/core';
import { CartasService } from 'src/app/servicios/cartas.service';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.css']
})
export class MayorMenorComponent implements OnInit {

  deckId!: string;
  currentCard: any;
  previousCard: any;
  nextCard: any;
  result!: string;
  currentCards: any[] = [];
  points!: number;

  constructor(private cartasS:CartasService) {}

  ngOnInit(): void {
    this.shuffleDeck();
  }


  shuffleDeck() {
    this.cartasS.shuffleDeck().subscribe((response) => {
      this.deckId = response.deck_id;
      this.drawTwoCards();
    });
  }

  drawTwoCards() {
    this.cartasS.drawTwoCards(this.deckId).subscribe((response) => {
      this.currentCards = response.cards;
      this.currentCard = response.cards[0];
      console.log(this.currentCards);
    });
  }

  checkGuess(isHigher: boolean) {

      const currentRank1 = this.getCardRank(this.currentCards[0].value);
      const currentRank2 = this.getCardRank(this.currentCards[1].value);
      console.log('carta 1 ' + currentRank1 + ' - carta 2 ' + currentRank2);
      console.log(isHigher);

      if ((isHigher && currentRank1 < currentRank2) || (!isHigher && currentRank1 > currentRank2)) {
        console.log('entre al if');
        this.result = 'Es correcto, la carta era ' + this.currentCards[1].value;
      } else {
        console.log('entre al else');
        this.result = 'Es correcto, la carta era ' + this.currentCards[1].value;
       
      }
      
         this.drawTwoCards();
    
  }

  private getCardRank(value: string): number {
    const rankMap: { [key: string]: number } = {
      '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
      'JACK': 11, 'QUEEN': 12, 'KING': 13, 'ACE': 14
    };
  
    return rankMap[value as keyof typeof rankMap] || 0;
  }
  
}
