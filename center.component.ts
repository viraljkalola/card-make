import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormControlName} from '@angular/forms'; 

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  title='Angular Reactive Form';
  loginForm=new FormGroup({
    user:new FormControl(''),
    password:new FormControl(''),
  })
  Data:any=[];
  loginUser(){
   this.Data.push(this.loginForm.value);
   console.warn(this.loginForm.value);
   console.log(this.Data);
 }
  constructor(){}


  ngOnInit(): void {
  }

}
