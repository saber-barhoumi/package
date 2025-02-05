import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importation des composants standalones
import { CarpoolingOffersComponent } from './components/carpooling-offers/carpooling-offers.component';
import { CarpoolingRequestsComponent } from './components/carpooling-requests/carpooling-requests.component';
import { CarpoolingHistoryComponent } from './components/carpooling-history/carpooling-history.component';
import { CarpoolingStatisticsComponent } from './components/carpooling-statistics/carpooling-statistics.component';


// Importations Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  imports: [
    CommonModule,
    CarpoolingOffersComponent,  // Composants standalones importés
    CarpoolingRequestsComponent,
    CarpoolingHistoryComponent,
    CarpoolingStatisticsComponent,

    CommonModule, // Ce module est nécessaire pour ngClass et autres directives Angular
    MatCardModule, // Pour utiliser mat-card, mat-card-content, mat-card-title
    MatIconModule, // Pour utiliser mat-icon
    MatButtonModule, // Si vous utilisez des boutons Angular Material
    MatTooltipModule, // Pour les tooltips
    MatChipsModule, // Si vous utilisez des chips
    MatMenuModule, // Pour les menus
  ],
  exports: [
    CarpoolingOffersComponent,  // Exportation des composants si besoin
    CarpoolingRequestsComponent,
    CarpoolingHistoryComponent,
    CarpoolingStatisticsComponent,
    
  ]
})
export class CarpoolingModule { }
