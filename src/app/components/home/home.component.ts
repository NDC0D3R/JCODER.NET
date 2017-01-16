import {Component, OnInit} from '@angular/core';
import {HTTP_PROVIDERS}    from '@angular/http';
import {ContactService}    from './contact.service';
import {Email}             from './interfaces/Email';


@Component({
  selector: 'content',
  templateUrl: './app/components/home/home.tpl.html',
 providers: [HTTP_PROVIDERS, ContactService]
})
 
export class HomeComponent implements OnInit {
    constructor(private _contactService : ContactService) { }
    ngOnInit() { }
 
    public message: Email = {name: '', email: '', message: ''};
 
    onSubmit() {
      this._contactService.postEmail(this.message).subscribe(
        response => this.handleResponse(response),
        error => this.handleResponse(error)
      );
    }
 
    handleResponse(response){
      // console.log(`msg is: {response.status}`);
 
      if(response.status =='success'){
        this.message = {name: '', email: '', message: ''};
        alert('Danke für deine Nachricht');
      }
 
      if(response.status =='error'){
        alert('Leider konnten wir deine Nachricht nicht versenden. Probier es nochmals oder sende die email direkt. Danke');
      }
    }
}