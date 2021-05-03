import { Component, OnInit ,Input} from '@angular/core';
import { AllvarService } from '../ser/allvar.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card-profil',
  templateUrl: './card-profil.component.html',
  styleUrls: ['./card-profil.component.css']
})
export class CardProfilComponent implements OnInit {

  @Input() title: any ;

  constructor(  private r:Router ,private all:AllvarService  ) { }

  ngOnInit(): void {
  }


  supp_from_pro()
  {
    let info = this.all.get_array_gamer_info()
    console.log(info[0][0]) //email
    console.log (this.title[0]) // name game tp delete


    var body = {"email":info[0][0] , "nom":this.title[0] }
    console.log(body)
    var test = JSON.stringify(body)
  // load my games 
  const endpoint = 'http://127.0.0.1:8000/supp_from_profil';
  fetch(endpoint, { 
  method: 'POST',
  body: JSON.stringify(body)
  })
  .then((resp) => resp.json())
  .then((response) => {
  
  console.info(response);
  var js = JSON.parse(response)
   if(js[0]=="supp ok")
   {
     console.log("supprimer")
   }
  
  });
  





  }

}









