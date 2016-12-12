import { Component } from '@angular/core';
import {MenuItem} from 'primeng/primeng';
import { Auth } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ Auth ]
})
export class AppComponent {
  title = 'Seguimiento de inversiones';

  private items: MenuItem[];

  constructor(private auth: Auth) {}
  
  ngOnInit() {
        this.items = [
            {
                label: 'Ordenes',
                items: [{
                        label: 'Compra', 
                        icon: 'fa-plus',
                        items: [
                                {label: 'Acciones', routerLink: ['/buyStock']},
                                ]
                        },
                        {
                        label: 'Venta', 
                        icon: 'fa-plus',
                        items: [
                                {label: 'Acciones', routerLink: ['/sellStock']},
                                ]
                        },
                    ]
            },
            {
                label: 'Cartera',
                items: [
                    {label: 'Abierta', icon: 'fa-mail-forward', routerLink: ['/portfolio-open']},
                    {label: 'Cerrada', icon: 'fa-mail-reply', routerLink: ['/portfolio-close']}
                ]
            }
        ];
    }
}
