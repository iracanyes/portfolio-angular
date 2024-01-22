import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import { Environment } from "../../../../environments/environment.local";
import DOMPurify from "dompurify";
import {ContactMessage} from "../../../../types/types";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent implements OnInit {
  editorConf = {
    base_url: '/assets/tinymce',
    suffix: '.min',
    height: 400,
    menubar: true,
    plugin: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar:
      'undo redo | formatselect | bold italic backcolor | \
      alignleft aligncenter alignright alignjustify | \
      bullist numlist outdent indent | removeformat | help'
  };
  // Form fields
  contactForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.email, Validators.required]),
    subject: new FormControl("", [Validators.required]),
    message: new FormControl("", [Validators.required]),
  });
  _crsfToken = "";

  // eslint-disable-next-line no-empty-function
  constructor(private http: HttpClient) {}

  // eslint-disable-next-line no-empty-function
  ngOnInit(): void {
    this.http
      .get(`${Environment.PORTFOLIO_API_URL}/contact/send_mail`, { observe: 'response'})
      .subscribe({
        next: (data: HttpResponse<Object>) => {
          //console.log("Contact Init - response", data);

          if(data){
            //data.headers.keys().map(key => console.log(`${key} : ${data.headers.get(key)}`));
            //const headers = data.headers.get('');
            //this._crsfToken = <string> data?.headers.cookie.split("=")[1];
          }

        },
        error: (error: HttpErrorResponse) => {
          // eslint-disable-next-line no-console
          console.error(
            `Error while sending data to url: ${Environment.PORTFOLIO_API_URL}/contact/send_mail\n`,
            error
          );
        },
      });
  }

  get csrfToken(){
    return this._crsfToken;
  }

  get name() {
    return this.contactForm.get("name");
  }

  get email() {
    return this.contactForm.get("email");
  }

  get subject() {
    return this.contactForm.get("subject");
  }

  get message() {
    return this.contactForm.get("message");
  }

  getErrorName() {
    return this.name?.hasError("required") ? "Please enter your name" : "";
  }

  getErrorEmail() {
    if (this.email?.hasError("required")) {
      return "Please enter your message";
    }
    return this.email?.hasError("email") ? "Please enter a valid email" : "";
  }

  getErrorSubject() {
    return this.subject?.hasError("required")
      ? "Please enter the subject of your message"
      : "";
  }

  getErrorMessage() {
    return this.message?.hasError("required")
      ? "Please enter your message"
      : "";
  }

  sanitize(data: Partial<ContactMessage>): ContactMessage {
    return {
      name: data.name != undefined ? data.name : "",
      email: data.email != undefined ? data.email : "",
      subject: data.subject != undefined ? data.subject : "",
      message: data.message != undefined ? DOMPurify.sanitize(data.message, { USE_PROFILES: { html: true }}) : ""
    };
  }

  onSubmit() {
    if(this.contactForm.value.message ==  undefined )
      return;
    // eslint-disable-next-line no-console
    //console.log("Value submitted\n", this.contactForm.value);
    const data: ContactMessage = this.sanitize(this.contactForm.value);

    try {
      // eslint-disable-next-line no-console
      //console.log("Value submitted after sanitize\n", data);
      //console.log("this._crsfToken\n", this._crsfToken);


      if(true){
        //console.log("this._crsfToken\n", this._crsfToken);

        /* Create headers
        const headers = new HttpHeaders()
          .set("XSRF-Token", this._crsfToken);

         */

        // send request
        this.http
          .post(
            `${Environment.PORTFOLIO_API_URL}/contact/send_mail`,
            {...data, _csrf: this._crsfToken},
            {
              withCredentials: true,
              // headers
            },
          )
          .subscribe({
            next: (data: any) => {
              // eslint-disable-next-line no-console
              //console.log("Success!\n", data);
            },
            error: (error: HttpErrorResponse) => {
              // eslint-disable-next-line no-console
              console.error(
                `Error while sending data to url: ${Environment.PORTFOLIO_API_URL}/contact/send_mail\n`,
                error
              );
            },
          });
      }

    } catch (e) {
      // eslint-disable-next-line no-console
      console.error("Error sending mail", e);
    }
  }
}
