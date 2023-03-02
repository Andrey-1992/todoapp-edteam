import { Component, OnInit} from '@angular/core';
import { ReplaceSpacePipe } from 'src/app/module/pipes/replace-space.pipe';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{

  value = "Hola Andrey"

  constructor(private replaceSpaces: ReplaceSpacePipe) {}

  ngOnInit(): void {
    // this.value = this.replaceSpaces.transform(this.value)
  }

}
