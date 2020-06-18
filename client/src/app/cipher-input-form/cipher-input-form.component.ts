import { Component, OnInit } from '@angular/core';
import { CipherForm } from '../cipher-form';

@Component({
  selector: 'app-cipher-input-form',
  templateUrl: './cipher-input-form.component.html',
  styleUrls: ['./cipher-input-form.component.css']
})
export class CipherInputFormComponent implements OnInit {

  // constructor() { }
  submitted = false;

  onSubmit() { this.submitted = true; }

  ngOnInit(): void {
  }

}
