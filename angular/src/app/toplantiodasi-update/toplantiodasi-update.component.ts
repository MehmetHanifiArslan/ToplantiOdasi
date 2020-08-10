import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToplantiOdasi } from './../toplantiodasi/toplantiodasi';
import { AlertifyService } from './../alertify-service.service';
import { ToplantiodasiService } from './../toplantiodasi.service';


@Component({
  selector: 'app-toplantiodasi-update',
  templateUrl: './toplantiodasi-update.component.html',
  styleUrls: ['./toplantiodasi-update.component.css']
})
export class ToplantiodasiUpdateComponent implements OnInit {

  id: number;
  toplantiodasi: ToplantiOdasi;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertifyService: AlertifyService,
    private toplantiodasiService: ToplantiodasiService
  ) {}

  ngOnInit(): void {
    this.toplantiodasi = new ToplantiOdasi();
    this.id = this.route.snapshot.params['id'];
    this.toplantiodasiService.getToplantiOdasi(this.id).subscribe(
      (data) => {
        console.log('başarılı');
        this.toplantiodasi = data;
      },
      (error) => console.log(error)
    );
  }

  updateToplantiOdasi() {
    this.toplantiodasiService.updateToplantiOdasi(this.id, this.toplantiodasi).subscribe(
      (data) => {
        // this.alertifyService.warning(
        //   this.toplantiodasi.salon+ ' başarıyla güncellendi.'
        // );
      },
      (error) => console.log(error)
    );

  }

  onSubmit() {
    this.updateToplantiOdasi();
  }

}
