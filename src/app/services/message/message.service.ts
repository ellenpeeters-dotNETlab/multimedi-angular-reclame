import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: string[] = [
    'hallo',
    'reclame',
    'dove is een goed product',
    'garnier is een slecht product',
    '...'
  ];

  constructor() { }

  public getMessages(): string[] {
    return this.messages;
  }
}
