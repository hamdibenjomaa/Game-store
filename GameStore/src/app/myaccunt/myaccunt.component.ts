import { Component, OnInit,OnChanges, Input } from '@angular/core';
import { AllvarService } from '../ser/allvar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myaccunt',
  templateUrl: './myaccunt.component.html',
  styleUrls: ['./myaccunt.component.css']
})
export class MyaccuntComponent implements OnInit,OnChanges {


  

  info: string[] = []; //= this.all.get_array_gamer_info()
  //= this.all.get_array_gamer_info()
  games: string[] = []; //= this.all.get_my_games()
 //= this.all.get_my_games()

  constructor( private r:Router ,private all:AllvarService ) {
 
    this.get_my_games()


document.addEventListener('mousemove', e => {
  
  this.get_my_games()

  //console.log(this.games)

}  )
  

   }



get_my_games()
{
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
console.log(js+" test here num 7707")
this.games = js
this.all.set_my_games(js)
});

}


ngOnChanges() 
{
  
}

  ngOnInit(): void
  {
    this.info = this.all.get_array_gamer_info()
    this.games = this.all.get_my_games()

    console.log(this.games)
  }
 

  
    
  
}
