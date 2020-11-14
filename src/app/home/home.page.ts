import { Component } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
textToCode: string;
public myAngularxQrCode: string = null;

  constructor(
   private qrScanner: QRScanner
  ) {}

createQRCode(){
	this.myAngularxQrCode = this.textToCode;
	this.textToCode = "";

	}

	scancode(){
	this.showcamera = true;
	this.qrScanner.prepare()
	.then((status: QRScannerStatus) => {
    if (status.autorisé){

    let scan = this.qrScanner.scan()subscribe((text: string) => { 
    console.log('scanner quelque chose', text);
    this.textScanner = text.result
    this.showcamera = false;
    });

    }else if (status.refuse) {

    } else {

	})
	.catch(e: any) => console.log(error is', e));
	}

	fermercamera() {
	this.showcamera = false;
	this.qrScanner.hide();
	this.qrScanner.destroy();
	}
}
