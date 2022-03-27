import { Component } from '@angular/core';
import { Email } from 'models/email.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gmail_like_loi';
  vettMail : Email[] = [];
  //emails:Email[];   // <-- component property
  

    sendMail(destinatario : HTMLInputElement, oggetto : HTMLInputElement, messaggio : HTMLInputElement) : boolean{
       console.log(destinatario.value + " " + oggetto.value + " " + messaggio.value + " " );
       let e = new Email (destinatario.value,oggetto.value,messaggio.value);
       this.vettMail.push(e);
       return false;

    }


}





