import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-supporters',
  templateUrl: './supporters.page.html',
  styleUrls: ['./supporters.page.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SupportersPage implements OnInit {

  supporters = [
    {
      name: '猫屋町生活環境課',
      area: '猫屋町',
      description: '猫屋町の地域猫活動を支援しています。'
    },
    {
      name: '猫屋町北会',
      area: '猫屋町',
      description: '猫屋町北町内の活動を支援しています。'
    },
    {
      name: '猫屋町南会',
      area: '猫屋町',
      description: '猫屋町南町内の活動を支援しています。'
    },
    {
      name: '猫屋町西会',
      area: '猫屋町',
      description: '猫屋町西町内の活動を支援しています。'
    },
    {
      name: '猫屋町東会',
      area: '猫屋町',
      description: '猫屋町東町内の活動を支援しています。'
    },
    {
      name: '猫屋町中央会',
      area: '猫屋町',
      description: '猫屋町中央町内の活動を支援しています。'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
