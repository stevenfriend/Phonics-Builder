'use strict'

class Card {
  constructor(card, letters) {
    this.card = card;
    this.letters = letters;
    this.counter = 0;
    this.card.innerHTML = letters[this.counter];
    this.card.addEventListener('click', () => { this.nextLetter() });
  }

  nextLetter() {
    if (this.counter < this.letters.length - 1) this.counter++;
    else this.counter = 0;
    this.card.innerHTML = this.letters[this.counter];
  }

  prevLetter() {
    if (this.counter > 0) this.counter--;
    else this.counter =  this.letters.length - 1;
    this.card.innerHTML = this.letters[this.counter];
  }
}
  