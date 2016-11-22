import { Component } from '@angular/core';
import {MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Seguimiento de inversiones';

  private items: MenuItem[];

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
