import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ICategory } from 'src/app/Interfaces/ICategory';
import { AlertController } from '@ionic/angular';
import { IResponse } from 'src/app/Interfaces/IResponse';



@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  public categories: ICategory[] = [];
  constructor(
    private alertController: AlertController,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getCategories().subscribe(response => {
      if (response.success) {
        this.categories = response.categories
      }else {
        this.presentAlert(response.message);
        //alert(response.message);
      }
    });

  }



  async presentAlert(message: string="") {
    const alert = await this.alertController.create({
      header: 'Μήνυμα',
      message: message,
      buttons: ['Οκ']
    });

    await alert.present();
  }
}
