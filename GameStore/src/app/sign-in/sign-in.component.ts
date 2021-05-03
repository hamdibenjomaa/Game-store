import { Component, OnInit } from '@angular/core';
import { AllvarService } from '../ser/allvar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor( private r:Router ,private all:AllvarService) { }

  ngOnInit(): void {
  }

insert_gamer()
{
 let fname = (<HTMLInputElement>document.getElementById("name")).value

 let lname = (<HTMLInputElement>document.getElementById("last")).value

 let email = (<HTMLInputElement>document.getElementById("email")).value

 let psw = (<HTMLInputElement>document.getElementById("psw")).value

 let tel = (<HTMLInputElement>document.getElementById("tel")).value

 let img = (<HTMLInputElement>document.getElementById("img")).value




  const body = {"email":fname,"password":psw , "prenom":fname , "nom":lname , "tel":tel , "photo":img}

console.log(JSON.stringify(body))
  const endpoint = 'http://127.0.0.1:8000/signup';
  fetch(endpoint, {
  method: 'POST',
  body: JSON.stringify(body)
  })
  .then((resp) => resp.json())
  .then((response) => {

  
    if (response[0]==true) 
    {
this.r.navigate(['/login'])
    }
  
  });

}


}


