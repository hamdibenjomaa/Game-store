import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil-admin',
  templateUrl: './acceuil-admin.component.html',
  styleUrls: ['./acceuil-admin.component.css']
})
export class AcceuilAdminComponent implements OnInit {

  t = [ 'aaaaa', 'bbbbb' , 'cccc' , 'ddddd','fsgs','dsvdsv'] 
  constructor() { }

  ngOnInit(): void {
  }

}
