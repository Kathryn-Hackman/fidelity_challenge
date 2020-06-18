import { Component, OnInit } from '@angular/core';
import { CipherForm } from '../cipher-form';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { objectExpression } from '@babel/types';
import { Response } from '../response';


@Component({
  selector: 'app-cipher-input-form',
  templateUrl: './cipher-input-form.component.html',
  styleUrls: ['./cipher-input-form.component.css']
})
export class CipherInputFormComponent implements OnInit {

  model = new CipherForm('Test input string', 0);
  constructor(private http:HttpClient) { }
  submitted = false;
  response: Response;

  onSubmit() { this.submitted = true;
               console.log(this.model.inputString);
               console.log(this.model.shift);
               const url = 'http://localhost:3000?inputString=' + this.model.inputString + '&shift=' + this.model.shift;
               console.log(url);
               const httpOptions = {
                headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'
              }) };
               this.http.get(url, httpOptions).subscribe((data: Response) => {console.log(data)});
  }

  ngOnInit(): void {
  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
