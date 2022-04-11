import { Component, OnInit } from '@angular/core';

import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'George Eliot', 'It is never too late to be what you might have been.', new Date(2021,12,9)),
    new Quote(2,'Maya Angelou','There is no greater agony than bearing an untold story inside you.',new Date(2021,12,21)),
    new Quote(3,'J.K. Rowling','To the well-organized mind, death is but the next great adventure.',new Date(2022,1,12)),
    new Quote(4,'Winston S. Churchill','Success is not final, failure is not fatal: it is the courage to continue that counts.',new Date(2022,3,8)),
    
  ];
    toggleDetails(index:any){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
    completeQuote(isComplete: any, index: number){
      if (isComplete) {
        this.quotes.splice(index,1);
      }
    }
    addNewQuote(quote: Quote){
      let quoteLength = this.quotes.length;
      quote.id = quoteLength+1;
      quote.completeDate = new Date(quote.completeDate)
      this.quotes.push(quote)
    }
    deleteQuote(isComplete: boolean, index: number){
      if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
  
        if (toDelete){
          this.quotes.splice(index,1)
        }
      }
    }
  constructor() { }
 
  ngOnInit()  {
  }

}

