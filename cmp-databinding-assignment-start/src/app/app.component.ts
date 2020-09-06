import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ticks = 0;
  odds: number[] = [];
  evens: number[] = [];

  onGameTick() {
    this.ticks++;
    if (this.ticks % 2 === 0) {
      this.evens.push(this.ticks);
    } else {
      this.odds.push(this.ticks);
    }
  }
}
