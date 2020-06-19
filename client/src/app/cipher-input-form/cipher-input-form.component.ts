import { Component, OnInit } from '@angular/core';
import { CipherForm } from '../cipher-form';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '../response';


@Component({
  selector: 'app-cipher-input-form',
  templateUrl: './cipher-input-form.component.html',
  styleUrls: ['./cipher-input-form.component.css']
})
export class CipherInputFormComponent implements OnInit {
  model = new CipherForm('Enter your text here', 0);
  constructor(private http: HttpClient) { }
  submitted = false;
  response: Response;

  onSubmit() {
               this.submitted = true;
               const url = 'http://localhost:3000?inputString=' + this.model.inputString + '&shift=' + this.model.shift;
               const httpOptions = {
                headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'
              }) };
               this.http.get(url, httpOptions).subscribe((data: Response) => {
                   this.model.encryptedString = data.result;
                   this.model.allEncryptedStrings = data.all;
                  });
  }
  ngOnInit(): void {
    const url = 'http://localhost:3000/all';
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'
    }) };
    this.http.get(url, httpOptions).subscribe((data: Response) => {
      this.model.allEncryptedStrings = data.all;
    });

  }
}
