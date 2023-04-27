import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  number:any
  submit(){
    let splitted = this.number.split()
   console.log(this.number)
   console.log(splitted)
   const usingSplit = this.number.split('');
const usingSpread = [...this.number];
const usingArrayFrom = Array.from(this.number);
const usingObjectAssign = Object.assign([], this.number);
console.log(usingObjectAssign)
  }
  ngOnInit(): void {
    console.log(this.number)

  }
  title = 'calculator';
 
}
