import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  number:string =''
  result:number |null =null
  submit(){
    console.log(this.number)
    debugger
    const lines = this.number.split('\n');
    let totalResult: number | null = null;

    lines.forEach((line: any) => {
      const action = line.split(' ');
  
  if (action.lenght % 2 === 1){
    let num1:any = parseFloat(action[0]);
    let i = 1;

    while (i < action.length) {
      const operator = action[i];
      const num2 = parseFloat(action[i + 1]);

      let result: number | null = null;

      if (operator === '+') {
        result = num1 + num2;
      } else if (operator === '-') {
        result = num1 - num2;
      } else if (operator === '*') {
        result = num1 * num2;
      } else if (operator === '/') {
        result = num1 / num2;
      } else if (operator === '^') {
        result = Math.pow(num1, num2);
      }

      if (result !== null) {
        if (totalResult === null) {
          totalResult = result;
        } else {
          if (operator === '+') {
            totalResult += result;
          } else if (operator === '-') {
            totalResult -= result;
          } else if (operator === '*') {
            totalResult *= result;
          } else if (operator === '/') {
            totalResult /= result;
          } else if (operator === '^') {
            totalResult = Math.pow(totalResult, result);
          }
        }
      }

      num1 = result;
      i += 2;
    }
  }
});

this.result = totalResult;


    
//     let splitted = this.number.split()
//    console.log(this.number)
//    console.log(splitted)
//    const usingSplit = this.number.split('');
// const usingSpread = [...this.number];
// const usingArrayFrom = Array.from(this.number);
// const usingObjectAssign = Object.assign([], this.number);
// console.log(usingObjectAssign)
  }
  ngOnInit(): void {
    console.log(this.number)

  }
  title = 'calculator';
 
}
