import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Email } from 'models/email.models';

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent implements OnInit {
  ngOnInit(): void {

  }
  @Input() email : Email = null!;
  @HostBinding("class") cssColor = "white";
  show = false;
  onShowHide(): boolean{
    this.show = !this.show;
    return false;  
  }

  specializza(): boolean{
    if(this.cssColor == "white") this.cssColor = "yellow";
    else this.cssColor = "white";
    return false;
  }

}