import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heores-hero-card',
  templateUrl: './card.component.html',
  styles: ``
})
export class CardComponent implements OnInit{
  @Input()
  public hero!: Hero;

  ngOnInit(): void {
    if(!this.hero) throw Error('Hero property is required.')
  }

}
