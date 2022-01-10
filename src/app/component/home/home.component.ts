import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [
    "../../../assets/udaipur1.jpg",
    "../../../assets/k.jpg",
    "../../../assets/goa.jpg",
    "../../../assets/hyd.jpg",
    "../../../assets/hp.jpg"
  ]
  changeBackgroundCounter: number = 0;
  entryForm: FormGroup;
  constructor(public fb: FormBuilder) {
    this.entryForm = fb.group({
      pick: ["", [Validators.required]],
      dest: ["", [Validators.required]],
      dep: ["", [Validators.required]],
      claps: ["", [Validators.required]]
    })
  }
  photo = "";
  submitted = false;
  ngOnInit(): void {
    this.photo = this.images[0];
    setInterval(() => {
      this.changeBackgroundCounter++;
      if (this.changeBackgroundCounter > this.images.length - 1) {
        this.changeBackgroundCounter = 0;
      }

      this.photo = this.images[this.changeBackgroundCounter];

    }, 5000);
  }
  onSubmit(value: any) {
    console.log(value)
  }
  get f() { return this.entryForm.controls; }



}
