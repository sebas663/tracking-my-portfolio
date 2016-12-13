import { Component } from '@angular/core';
import {MenuItem} from 'primeng/primeng';
import { Auth } from './services/auth/auth.service';

const styles = require('./app.component.css');
const template = require('./app.component.html');

@Component({
  selector: 'app-root',
  template: template,
  styleUrls: [ styles ],
  providers: [ Auth ]
})
export class AppComponent {
  title = 'Seguimiento de inversiones';

  constructor(private auth: Auth) {}
  
  ngOnInit() {}
        
}
