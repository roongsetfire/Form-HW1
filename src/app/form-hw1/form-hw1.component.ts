import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-form-hw1',
  templateUrl: './form-hw1.component.html',
  styleUrls: ['./form-hw1.component.css']
})
export class FormHW1Component implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['',Validators.required],
      email: ['',[Validators.email,Validators.required]],
      postal_address: ['',Validators.required],
      comments: ['']
    })
  }

  ngOnInit(): void {
  }

}
