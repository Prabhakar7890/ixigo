import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

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
  
 
  options: string[] = ['One', 'Two', 'Three'];
  filteredpicks: Observable<string[]> | any;
  filtereddrops: Observable<string[]> | any;

  constructor(public fb: FormBuilder, private router:Router) {
    this.entryForm = fb.group({
      pick: ["", [Validators.required]],
      dest: ["", [Validators.required]],
      dep: ["", [Validators.required]],
      claps: ["", [Validators.required]]
    })
  }
  photo = "";
  submitted = false;
  pick:string="";
  dest:string="";

  ngOnInit(): void {
    this.photo = this.images[0];
    setInterval(() => {
      this.changeBackgroundCounter++;
      if (this.changeBackgroundCounter > this.images.length - 1) {
        this.changeBackgroundCounter = 0;
      }

      this.photo = this.images[this.changeBackgroundCounter];

    }, 5000);

    this.filteredpicks = this.pick.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
    this.filtereddrops = this.pick.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }
 
  get f() { return this.entryForm.controls; }

  onSubmit(value: any) {
    console.log(value)
  }
  
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onSearch(){
    this.router.navigate([`buses/${this.pick}/${this.dest}`])
  }

}
