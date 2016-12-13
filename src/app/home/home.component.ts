import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/primeng';
import { Auth } from '../services/auth/auth.service';

const styles = require('./home.component.css');
const template = require('./home.component.html');

@Component({
  selector: 'app-home',
  template: template,
  styleUrls: [ styles ],
  providers: [ Auth ]
})
export class HomeComponent implements OnInit {

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
