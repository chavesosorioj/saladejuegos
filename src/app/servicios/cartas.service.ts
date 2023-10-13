import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartasService {

  private apiUrl = 'https://deckofcardsapi.com/api/deck';

  constructor(private http: HttpClient) { }

  traermazo(){
    return this.http.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'); //confirmar
  }

  traerDosCartas(deck_id:string){
    // return this.http.get(`https://deckofcardsapi.com/api/deck/${cartaId}/draw/?count=1`);
    return this.http.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`);

    
  }

  shuffleDeck(): Observable<any> {
    const url = `${this.apiUrl}/new/shuffle/?deck_count=1`;
    return this.http.get(url);
  }

  drawCard(deckId: string): Observable<any> {
    const url = `${this.apiUrl}/${deckId}/draw/?count=1`;
    return this.http.get(url);
  }

  drawTwoCards(deckId: string): Observable<any> {
    const url = `${this.apiUrl}/${deckId}/draw/?count=2`; 
    return this.http.get(url);
  }
}
