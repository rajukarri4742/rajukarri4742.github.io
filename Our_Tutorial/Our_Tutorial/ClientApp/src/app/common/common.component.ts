import { Component } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-common-component',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent {
  public currentCount = 0;
  sideMenuList: any[] = [];
  listOfPrograms: any[] = [];
  subTitle: string = "Hello World";
  programStatement: string = "In this example, you will learn to print Hello, World! on the screen in C programming.To understand this example, you should have the knowledge of the following C programming topics";
  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.sideMenuList = this.appService.listOfTopics; //["Hello World", "Even / Odd", "Amstrong Number"];
  }


  public getALLData(value: any) {
    this.listOfPrograms = value.listOfPrograms;
    this.getData(this.listOfPrograms[0])
  }


  public getData(value: string) {
    this.subTitle = value;
    //if (value.includes("Hello World")) {
    //  this.subTitle = value;
    //  this.programStatement= "In this example, you will learn to print Hello, World! on the screen in C programming.To understand this example, you should have the knowledge of the following C programming topics";
    //}

    //if (value.includes("Even / Odd")) {
    //  this.subTitle = value;
    //  this.programStatement = "In the program, the integer entered by the user is stored in the variable num. Then, whether num is perfectly divisible by 2 or not is checked using the modulus % operator.If the number is perfectly divisible by 2, test expression number % 2 == 0 evaluates to 1(true).This means the number is even.However, if the test expression evaluates to 0(false), the number is odd.";
    //}

    //if (value.includes("Amstrong Number")) {
    //  this.subTitle = value;
    //  this.programStatement = "The variables are printed before swapping using println() to see the results clearly after swapping is done.First, the value of first is stored in variable temporary(temporary = 1.20f).Then, value of second is stored in first(first = 2.45f). And, finally value of temporary is stored in second(second = 1.20f).This completes the swapping process and the variables are printed on the screen.Remember, the only use of temporary is to hold the value of first before swapping.";
    //}
  }
}
