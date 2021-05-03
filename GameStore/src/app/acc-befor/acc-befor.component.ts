import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AllvarService } from '../ser/allvar.service';

@Component({
  selector: 'app-acc-befor',
  templateUrl: './acc-befor.component.html',
  styleUrls: ['./acc-befor.component.css']
})
export class AccBeforComponent implements OnInit, OnDestroy {

  t= []
  constructor(private r:Router ,private all:AllvarService) 
  {

this.get_all_games_db()

  }


get_all_games_db()
{

    // load my games 
const endpoint = 'http://127.0.0.1:8000/all_games_db';
fetch(endpoint)
.then((resp) => resp.json())
.then((response) => {

//console.info(response);
let js = JSON.parse(response)
this.t = js
this.all.set_games_from_db(js)

});


}





to_profil()
{
  if (this.all.i_am_in==true)
  {
  this.all.set_tr_login(true)
  this.all.set_i(21)
  this.r.navigate(['/profil'])
  }
  else 
  {
    alert("you shloud sign in before")
  }
  
}





  ngOnInit(): void {
  }

ngOnDestroy() 
{
  if (this.all.i_am_in == true)
  { 
    /*
  let t = this.all.get_array_gamer_info()
  console.log(this.all.i_am_in+"name games")
  var body = {"email":t[0][0]}
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
  }
 // console.log(this.all.get_my_games() +" hhhhhhhhhhhhhh")
}



}
