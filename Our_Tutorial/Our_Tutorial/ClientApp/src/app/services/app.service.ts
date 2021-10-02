import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {


  public listOfTopics = [
    {
      "name": "Basic Programs",
      "listOfPrograms": ["Even or Odd", "Reverse of number", "Palindrome", "Armstrong Number","Neon number"],
    },
    {
      "name": "Array Programs",
      "listOfPrograms": ["Length of Array"],
    }
  ];


  public topis = [
    {
      "name": "Even or Odd",
      "problemStatement": ["A number which is divisible by 2 and generates a remainder of 0 is called an even   number.","A number which is divisible by 2 and generates a remainder of 0 is called an even number.","E.g.: - (10%2------we need to tell number is odd number or even number."," 2) 10 (5 ","   10"," Remainder  So, 10 is an even number","  E.g.: - (11%2------we need to tell number is odd number or even number."," 2) 11 (5","   10 "," Remainder  So, 11 is an odd number"],
      "inputOutput": ["Input:"," 23"," 44 ","Output:"," odd"," even "],
      "program":""
    },

    {
      "name": "Reverse of number",
      "problemStatement": ["Display the input number in reverse order as a number."," Example 1: if your program reads the value 123456 from the keyboard it should print to the screen the value 654321."," Example 2:  if your program reads the value 123400 from the keyboard it should print to the screen the value 4321 (NOT 004321)."],
      "inputOutput": ["Input:"," 12345"," 56789","Output:"," 54321 "," 98765  "],
      "program": ""
    },
    {
      "name": "Palindrome",
      "problemStatement": ["A palindrome number is a number that is same after reverse. In simple words, Palindrome is the reverse of a number is equal to its original number"],
      "inputOutput": ["Input:", "36523", "124421", "Output:", "palindrome", "not palindrome"],
      "program": ""
    },

    {
      "name": "Armstrong Number",
      "problemStatement": ["An Armstrong number is a number which equals to the sum of the cubes of its individual digits.", "For example:", "153 is an Armstrong number as", "153 = (1)3 + (5)3 + (3)3 ", "   = 1 + 125 + 27=153.","Here, we are adding cubes of individual digits which is equal to its original number 153."],
      "inputOutput": ["Input:", "153", "Output:", "Armstrong Number"],
      "program": ""
    },
    {
      "name": "Neon number",
      "problemStatement": ["A neon number is a number where the sum of digits of square of the number is equal to the number. ", "For example: 12", "First, we need to perform square of the number that is 9*9 = 81 and then add the digits of the square that is 8 + 1 = 9 which is not equal to 9So, 9 is a neon number"],
      "inputOutput": ["Input:", "12", "9", "Output:", "not a neon number","Neon number"],
      "program": ""
    }
  ];

}
