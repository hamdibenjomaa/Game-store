import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { AllvarService } from '../ser/allvar.service';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css']
})
export class CardGameComponent implements OnInit {


 
  @Input() title: any ;
  constructor(  private r:Router ,private all:AllvarService  ) 
   {
   //  this.get_info_game()
   }
  
  ngOnInit(): void {
 //   console.log("fvdfvdf")
   console.log(this.title[0])
  }


add() 
{
  let info = this.all.get_array_gamer_info()
  console.log(info[0][0]) //email
  console.log (this.title[0]) // name game tp delete
  var body = {"email":info[0][0] , "nom":this.title[0] }
  console.log(body)
// load my games 
const endpoint = 'http://127.0.0.1:8000/add_to_profil';
fetch(endpoint, { 
method: 'POST',
body: JSON.stringify(body)
})
.then((resp) => resp.json())
.then((response) => {

console.info(response);
//let js = JSON.parse(response)
//console.log(js[0][2]+" test get info game")

});




}



  get_info_game()
{


  var body = {"nom": this.title[0] }
  console.log(body)
  var test = JSON.stringify(body)
// load my games 
const endpoint = 'http://127.0.0.1:8000/info_game_card';
fetch(endpoint, { 
method: 'POST',
body: JSON.stringify(body)
})
.then((resp) => resp.json())
.then((response) => {

console.info(response);
let js = JSON.parse(response)
console.log(js[0][2]+" test get info game")

});



}

}
