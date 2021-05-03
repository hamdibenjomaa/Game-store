import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { AllvarService } from '../ser/allvar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient , private r:Router ,private all:AllvarService) { }

  
  ngOnInit(): void {
  }
tr = false 

async connect()
{

 var nom = (<HTMLInputElement>document.getElementById("nom")).value 
 var psw = (<HTMLInputElement>document.getElementById("psw")).value

if( (nom=="root") && (psw=="root") )
{
  console.log("root")
  this.all.set_i(2)
  this.all.set_tr(true)
  this.r.navigate( ['/homeadmin'] )
}

var body = {"email":nom,"psw":psw}

var test = JSON.stringify(body)

const endpoint = 'http://127.0.0.1:8000/signin';
fetch(endpoint, {
method: 'POST',
body: JSON.stringify(body)
})
.then((resp) => resp.json())
.then((response) => {

//console.info(response);
let js = JSON.parse(response)
if (response.length >20)
{ 
 // this.tr=true
  
/*
  var body = {"email":js[0][0]}
   // var body = {"email":t[0][0]}
   console.log(body)
   var test = JSON.stringify(body)
 // load my games 
 const endpoint = 'http://127.0.0.1:8000/get_games_prifil';
 fetch(endpoint, { 
 method: 'POST',
 body: JSON.stringify(body)
 })
 .then((resp) => resp.json())
 .then((response) => {
 
 console.info(response);
 let js = JSON.parse(response)
 console.log(js+" test here")
 this.all.set_my_games(js)
 });
   
*/






  this.all.set_array_gamer_info(js)
  this.all.set_i(20)
  this.all.set_i_am_in(true)
  this.r.navigate(['/homegamer'])
}



});






}

}
