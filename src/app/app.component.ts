import { Component } from '@angular/core';
import {Hero} from "./heroes/hero";

@Component({
  selector: 'app-root',
  template: '<hero-form></hero-form>'
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Baekhyun', 'Light'),
    new Hero(2, 'Chen', 'Thunder'),
    new Hero(3, 'Xiumin', 'Ice'),
    new Hero(4, 'Kai', 'Time')];
  myHero = this.heroes[0].name;
  clickMessage = '';
  values = ''
  value = ''

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }

  onKey(event: KeyboardEvent) {
    this.values = (<HTMLInputElement>event.target).value + ' | ';
  }

  onKey2(value: string) {
    this.value += value + ' | ';
  }

}
