import { Component, OnInit } from '@angular/core';
import { AllvarService } from '../ser/allvar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 
  
  constructor(private r:Router ,private all:AllvarService) { }




  




  toHomegamer()
  {
    this.all.set_tr_login(false)
    this.all.set_i(20)
  }

to_profil()

{

  this.all.set_tr_login(true)
  this.all.set_i(21)
  this.r.navigate(['/profil'])

}

get_tr()
{
  return this.all.get_tr()
}

get_i() 
{
 
  return this.all.get_i()
  
}

get_tr_login()
{
  return this.all.get_tr_login()
}


  get_tr_admin() : boolean
  {
  return this.all.get_tr_admin()
  }
  
  set_tr_admin( temp_tr : boolean ) 
  {
    this.all.set_tr_admin(temp_tr)
  }
  
  ngOnInit(): void {
  }

  toHomeUser()
  {
      this.all.set_i(1)
  }

  to_log()
  {

     // this.all.set_tr_login(true)
      this.all.set_i(10)
    
  }

  toAddAdmin ()
  {
    this.all.set_tr(false)
  }


  toHomeAdmin ()
  {
       this.all.set_tr(true)
       this.all.set_tr_admin(true)  
  }



}
