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
  programStatement: string[] = [];
  inputOutput: string[] = [];
  program: string = "";
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
    let arrTopic: any[] = this.appService.topis.filter(item => item.name == value);
    if (arrTopic.length > 0) {
      this.programStatement = arrTopic[0].problemStatement;
      this.inputOutput = arrTopic[0].inputOutput;
      this.program = arrTopic[0].program;
    }
    else {
      this.programStatement = [];
      this.inputOutput = [];
      this.program = "";
    }
  }
}
