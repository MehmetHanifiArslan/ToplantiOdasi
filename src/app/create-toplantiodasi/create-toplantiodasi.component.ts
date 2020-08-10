import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToplantiOdasi } from './../toplantiodasi/toplantiodasi';
import { ToplantiodasiService } from './../toplantiodasi.service';
import { AlertifyService } from './../alertify-service.service';

@Component({
  selector: 'app-create-toplantiodasi',
  templateUrl: './create-toplantiodasi.component.html',
  styleUrls: ['./create-toplantiodasi.component.css']
})
export class CreateToplantiodasiComponent implements OnInit {
  toplantiodasi: ToplantiOdasi = new ToplantiOdasi();
  submitted = false;

  constructor(
    private toplantiodasiService: ToplantiodasiService,
    private alertifyService: AlertifyService,
    private router: Router
  ) {}

  ngOnInit(): void {}



  newProduct(): void {
    this.submitted = false;
    this.toplantiodasi = new ToplantiOdasi();
  }



  save() {
    this.toplantiodasiService.createToplantiOdasi(this.toplantiodasi).subscribe(
      (data) => {
        // this.alertifyService.success(this.toplantiodasi.salon + ' başarıyla eklendi.');
      },
      (error) => console.log(error)
    );
   
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }




}



