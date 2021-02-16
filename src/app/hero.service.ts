import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService
  ) {
  }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.log('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    this.log(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(cur => cur.id === id));
  }

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }
}
