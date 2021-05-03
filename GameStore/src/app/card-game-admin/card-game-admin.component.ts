import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllvarService } from '../ser/allvar.service';

@Component({
  selector: 'app-card-game-admin',
  templateUrl: './card-game-admin.component.html',
  styleUrls: ['./card-game-admin.component.css']
})
export class CardGameAdminComponent implements OnInit {

  constructor(private r:Router ,private all:AllvarService) { }

  ngOnInit(): void {
  }

  toMAJ()
  {
    this.all.set_tr(false);
    this.all.set_i(2)
    this.all.set_tr_admin(true)
    this.r.navigate(['/maj']);
  }

}
