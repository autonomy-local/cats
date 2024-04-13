import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { IonImg } from '@ionic/angular/standalone';
@Component({
  selector: 'app-cats',
  templateUrl: './cats.page.html',
  styleUrls: ['./cats.page.scss'],
  standalone: true,
  imports: [IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CatsPage implements OnInit {

  cats = [
    {
      name: "まるたろう",
      area: "南町",
      description: "まるたろうは、南町に住む猫です。2024年4月に保護しました。去勢手術を受けています。"
    },
    {
      name: "ふくちゃん",
      area: "北町",
      description: "ふくちゃんは、北町に住む猫です。2023年11月に保護しました。去勢手術を受けています。"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
