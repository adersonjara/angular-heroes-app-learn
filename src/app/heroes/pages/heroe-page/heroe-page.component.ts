import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-heroe-page',
  templateUrl: './heroe-page.component.html',
  styles: ``
})
export class HeroePageComponent implements OnInit {

  public hero?: Hero;

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.heroesService.getHeroById(id))
    )
    .subscribe(hero => {
      if(!hero) return this.router.navigate(['/heroes/list']);
      this.hero = hero;
      console.log(hero);
      return;
    })
  }

  goBack():void{
    this.router.navigateByUrl('heroes/list')
  }
}
