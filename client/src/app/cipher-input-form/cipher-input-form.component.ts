import { Component, OnInit } from '@angular/core';
import { CipherForm } from '../cipher-form';

@Component({
  selector: 'app-cipher-input-form',
  templateUrl: './cipher-input-form.component.html',
  styleUrls: ['./cipher-input-form.component.css']
})
export class CipherInputFormComponent implements OnInit {

  model = new CipherForm('Test input string', 0);
  // constructor() { }
  submitted = false;

  onSubmit() { this.submitted = true;
               console.log(this.model.inputString);
               console.log(this.model.shift);
               const url = 'http://localhost:3000?inputString=' + this.model.inputString + '&shift=' + this.model.shift;
               console.log(url);
  }

  ngOnInit(): void {
  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
