import { NgModule } from "@angular/core";
import { ContactComponent } from "./contact.component";
import { ContactFormComponent} from "../../component/contact-form/contact-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EditorModule, TINYMCE_SCRIPT_SRC} from '@tinymce/tinymce-angular';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule, HttpXsrfTokenExtractor} from '@angular/common/http';
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {ContactRoutingModule} from "./contact.routing.module";
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {HeaderComponent} from "../../navigation/header/header.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {DirectivesModule} from "../../../directives/directives.module";
import {MatRippleModule} from "@angular/material/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpCsrfInterceptor} from "../../../service/HttpCsrfInterceptor";


const matModules = [
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatRippleModule,
];

@NgModule({
  declarations: [
    HeaderComponent,
    ContactComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN'
    }),
    EditorModule,
    ...matModules,
    DirectivesModule,
    ContactRoutingModule,
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    {
      provide: TINYMCE_SCRIPT_SRC,
      useValue: "assets/tinymce/tinymce.min.js"
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpCsrfInterceptor,
      multi: true
    },
  ]
})
export class ContactModule {}
