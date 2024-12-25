import { Component } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TestService } from "./srrvice/test.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private TestService: TestService) {}
  login(){
    this.TestService.login().subscribe((data) => {
      console.log(data);
      
    })
  }

  updatePassword() {
    this.TestService.updatePassword('ádf').subscribe((data) => {
      console.log(data);
      
    })
  }
}
