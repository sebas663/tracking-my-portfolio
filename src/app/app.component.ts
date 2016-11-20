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
                                {label: 'Acciones', routerLink: ['/orders']},
                                {label: 'Bonos', routerLink: ['/orders']},
                               ]
                        },
                        {
                        label: 'Venta', 
                        icon: 'fa-plus',
                        items: [
                                {label: 'Fondos', routerLink: ['/orders']},
                                {label: 'dolar', routerLink: ['/orders']},
                               ]
                        },
                    ]
            },
            {
                label: 'Cartera',
                items: [
                    {label: 'Abierta', icon: 'fa-mail-forward', routerLink: ['/portfolio']},
                    {label: 'Cerrada', icon: 'fa-mail-reply', routerLink: ['/portfolio']}
                ]
            }
        ];
    }
}
