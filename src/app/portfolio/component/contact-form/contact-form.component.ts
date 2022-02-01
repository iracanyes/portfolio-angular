import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required]),
    subject: new FormControl("", [Validators.required]),
    message: new FormControl("", [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {}

  get email(){
    return this.contactForm.get('email');
  }

  get subject(){
    return this.contactForm.get('subject');
  }

  get message(){
    return this.contactForm.get('message');
  }

  getErrorEmail(){
    if(this.email?.hasError('required')){
      return "Please enter your message";
    }
    return this.email?.hasError('email') ? "Please enter a valid email" : "";
  }

  getErrorSubject(){
    return this.subject?.hasError('required') ? "Please enter the subject of your message" : "";
  }

  getErrorMessage(){
    return this.message?.hasError('required') ? "Please enter your message" : "";
  }

  onSubmit(){
    console.warn("Value submitted", this.contactForm.value);
  }

}
