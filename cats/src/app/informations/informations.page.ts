import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.page.html',
  styleUrls: ['./informations.page.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InformationsPage implements OnInit {

  informations = [
    {
      title: '地域猫活動について',
      date: '2023/04/01',
      description: '地域猫活動についての説明です。',
      color: 'primary',
    },
    {
      title: '迷い猫情報【中央町】',
      date: '2024/04/01',
      description: '迷い猫の捜索協力をお願いします。',
      color: 'danger',
    },
    {
      title: '猫の飼い方セミナー',
      date: '2025/04/05',
      description: '猫の飼い方セミナーを開催します。市民センターにて。',
      color: 'success',
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
