import { Component } from '@angular/core';

export class NgxQrCode {
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public qrdata: string = null;

  constructor () {
    console.log('AppComponent running');
    this.qrdata = 'MyUrl de registro';
  }

  changeValue( newValue: string): void {
    this.qrdata = newValue;
  }

}
