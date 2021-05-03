import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllvarService {

  constructor() { }

  tr=true
  i=1
  tr_login = false
  tr_admin=true
  array_gamer_info = new Array
  i_am_in = false

  my_games = new Array
   
games_from_db = new Array


get_games_from_db() :  Array<string>
{
  return this.games_from_db
}


set_games_from_db(mg: Array<string>)
{
  this.games_from_db = mg
}


set_my_games(mg: Array<string>)
{
  this.my_games = mg
}




get_my_games() : Array<string>
{
  return this.my_games
}


  set_i_am_in(tr : boolean)
  {
     this.i_am_in = tr ;
  }

get_i_am_in() : boolean
{
  return this.i_am_in
}
  
get_array_gamer_info ( ) :Array<string>
{
   return this.array_gamer_info 
} 

 set_array_gamer_info ( t : Array<string>)
 {
    this.array_gamer_info = t 
 } 


  get_tr_login () : boolean 
{
  return this.tr_login
}

set_tr_login(temp_tr:boolean) 
{
  this.tr_login = temp_tr
}

get_i() : number 
{
return this.i
}

set_i(tepm_i : number)
{
  this.i = tepm_i
}
  
get_tr () : boolean 
{
  return this.tr
}

set_tr(temp_tr:boolean) 
{
  this.tr = temp_tr
}

get_tr_admin() : boolean
{
return this.tr_admin
}

set_tr_admin( temp_tr : boolean ) 
{
  this.tr_admin = temp_tr
}

}
