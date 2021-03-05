import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-aes-encrypt-decrypt',
  templateUrl: './aes-encrypt-decrypt.component.html',
  styleUrls: ['./aes-encrypt-decrypt.component.css']
})
export class AesEncryptDecryptComponent implements OnInit {


  msg;
  pwd = "135";
  constructor(private clipboard: ClipboardService) { }

  ngOnInit(): void {
  }

  encrypt(data) {
    if (data) {
      this.msg = CryptoJS.AES.encrypt(data.trim(), this.pwd.trim()).toString();
    } 
    else 
    {
      alert('Enter text to Encrypt.');
    }
  }

  decrypt(data) {
    if (data) {
      this.msg = CryptoJS.AES.decrypt(data.trim(), this.pwd.trim()).toString(CryptoJS.enc.Utf8)
    }
     else
    {
      alert('Enter text to Decrypt');
    }
  }

  copy() {
    this.clipboard.copy(this.msg);
  }

}