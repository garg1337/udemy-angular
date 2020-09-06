import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameTicks: EventEmitter<void>;
  interval: any;

  constructor() { 
    this.gameTicks = new EventEmitter<void>();
  }

  ngOnInit(): void {
  }

  startGame() {
    if (!this.interval) {
      this.interval = setInterval(()=>this.gameTicks.emit(), 1000);
    }
  }

  endGame() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
}
