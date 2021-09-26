import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {


  public listOfTopics = [
    {
      "name": "Basic Programs",
      "listOfPrograms": ["Even or Odd", "Grater than 3 numbers & smaller than 3 numbers", "Reverse of number", "Palindrome", "Armstrong Number", "Neon number", "SPY Number", "Automorphic number"],
    },
    {
      "name": "Array Programs",
      "listOfPrograms": ["Length of Array"],
    }
  ];

}
