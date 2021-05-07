import { Component, OnInit } from '@angular/core';

import { ColourService } from '../../services/colour/colour.service';
import { MessageService } from '../../services/message/message.service';

@Component({
  selector: 'app-boodschap',
  templateUrl: './boodschap.component.html',
  styleUrls: ['./boodschap.component.css']
})
export class BoodschapComponent implements OnInit {
  public hidden: boolean = false;
  public colours: string[] = [];
  public messages: string[] = [];

  constructor(
    private colourService: ColourService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.messages = this.messageService.getMessages();
    this.colours = this.colourService.getColours();
  }

  public updateColours(): void {
    this.colourService.updateColours();
  }

  public toggleMessages(): void {
    this.hidden = !this.hidden;
  }
}
