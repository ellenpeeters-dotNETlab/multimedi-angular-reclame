import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColourService {
  private colours: string[] = [
    'red',
    'yellow',
    'blue',
    'grey',
    'pink'
  ];

  constructor() { }

  public getColours(): string[] {
    return this.colours;
  }

  public getColour(index: number): string {
    return this.colours[index];
  }

  public updateColours(): void {
    const colours = [
      'red',
      'yellow',
      'blue',
      'grey',
      'pink'
    ];

    for (let i = 0; i < this.colours.length; i++) {
      this.colours[i] = colours[Math.round(Math.random() * 4)];
    }
  }
}
