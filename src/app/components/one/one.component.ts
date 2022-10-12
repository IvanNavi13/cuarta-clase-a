import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  public formLogin!: FormGroup;

  constructor() {}//private formGroup: FormGroup, private formControl: FormControl

  ngOnInit(): void {

    this.formLogin = new FormGroup({
      name: new FormControl('', [Validators.maxLength(10), Validators.minLength(5), Validators.required] ), 
      email: new FormControl('',[Validators.required]), 
      password: new FormControl('',[Validators.required]),
      phoneNumber: new FormControl("",[Validators.pattern("^[0-9]*$"), Validators.required]) 
    });

  }

  onSubmit(){
    
    this.formLogin.markAsDirty();
    this.formLogin.markAllAsTouched();
    this.markAllAsDirty();

    console.log("push");
    
    console.log(this.formLogin);
    console.log(this.formLogin.get("name")?.value);
    console.log(this.formLogin.get("email")?.value);
    console.log(this.formLogin.get("password")?.value);

    if(this.formLogin.invalid){
      return 
    }
    // send data to server ->
  }

  markAllAsDirty(){
    this.formLogin.get("name")?.markAsDirty();
    this.formLogin.get("email")?.markAsDirty();
    this.formLogin.get("password")?.markAsDirty();
    this.formLogin.get("phoneNumber")?.markAsDirty();
  }

}
