
import { Routes } from '@angular/router';
import { AccueilComponent} from './accueil/accueil.component';
import { CommissionComponent} from './commission/commission.component';
import { ContactComponent} from './contact/contact.component';
import { DahiraComponent} from './dahira/dahira.component';
import { ShopComponent} from './shop/shop.component';
import { MultimediaComponent} from './multimedia/multimedia.component';

export const ROUTES: Routes = [
  {path : '', component : AccueilComponent},
  {path : 'dahira', component : DahiraComponent},
  {path : 'contact', component : ContactComponent},
  {path : 'commission', component : CommissionComponent},
  {path : 'boutique', component : ShopComponent},
  {path : 'multimedia', component : MultimediaComponent},
];
