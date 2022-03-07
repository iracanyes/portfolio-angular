import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Environment } from "../../../../environments/environment.local";
import jsStringEscape from "js-string-escape";
import {ContactInitResponse, ContactMessage} from "../../../../types/types";
import {MatRippleModule} from "@angular/material/core";


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
      .get(`${Environment.PORTFOLIO_API_URL}/contact/send_mail`)
      .subscribe({
        next: (data: Partial<ContactInitResponse>) => {
          console.log("Contact Init - response", data);
          if(data){
            this._crsfToken = <string> data?._csrf;
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

  sanitize(data: ContactMessage) {
    return {
      name: jsStringEscape(data.name),
      email: jsStringEscape(data.email),
      subject: jsStringEscape(data.subject),
      message: jsStringEscape(data.message)
    };
  }

  onSubmit() {
    // eslint-disable-next-line no-console
    console.log("Value submitted", this.contactForm.value);
    const data = this.sanitize(this.contactForm.value);

    try {
      // eslint-disable-next-line no-console
      console.log("Value submitted", this.contactForm.value);

      const headers = new HttpHeaders()
        .set("CSRF-Token", this._crsfToken);
      // send request
      this.http
        .post(
          `${Environment.PORTFOLIO_API_URL}/contact/send_mail`,
          {...data, _csrf: this._crsfToken},
          {headers},
        )
        .subscribe({
          next: (data: any) => {
            // eslint-disable-next-line no-console
            console.log("Success!\n", data);
          },
          error: (error: HttpErrorResponse) => {
            // eslint-disable-next-line no-console
            console.error(
              `Error while sending data to url: ${Environment.PORTFOLIO_API_URL}/contact/send_mail\n`,
              error
            );
          },
        });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error("Error sending mail", e);
    }
  }
}
