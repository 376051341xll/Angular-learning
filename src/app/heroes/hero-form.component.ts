import { Component } from '@angular/core';

import { Hero }    from './hero';
import {HeroService} from "./hero.service";

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html',
  providers:[HeroService]
})
export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer', 'Light'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
    this.model = new Hero(42, '', '', 'Light-power');
  }
}
