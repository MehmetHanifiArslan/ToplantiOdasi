import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToplantiOdasi } from './../toplantiodasi/toplantiodasi';
import { ToplantiodasiService } from './../toplantiodasi.service';
import { AlertifyService } from './../alertify-service.service';

@Component({
  selector: 'app-toplantiodasi-list',
  templateUrl: './toplantiodasi-list.component.html',
  styleUrls: ['./toplantiodasi-list.component.css']
})
export class ToplantiodasiListComponent implements OnInit {
  toplantiodasi: Observable<ToplantiOdasi[]>;
  constructor(
    private toplantiodasiService: ToplantiodasiService,
    private alertifyService: AlertifyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.toplantiodasi = this.toplantiodasiService.gettoplantiodasiList();
  }

  deleteToplantiOdasi(id: number) {
    this.toplantiodasiService.deleteToplantiOdasi(id).subscribe(
      (data) => {
        // this.alertifyService.error('Toplantı başarıyla silindi.');
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }

  updateToplantiOdasi(id: number) {
    this.router.navigate(['/toplantiodasi-update', id]);
  }


}
