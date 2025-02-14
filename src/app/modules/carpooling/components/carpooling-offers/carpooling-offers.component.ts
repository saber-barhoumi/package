import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-carpooling-offers',
  templateUrl: './carpooling-offers.component.html',
  styleUrls: ['./carpooling-offers.component.scss']
})
export class CarpoolingOffersComponent {
  offers: any[] = []; // ✅ Déclaration de la propriété pour éviter l'erreur
}
