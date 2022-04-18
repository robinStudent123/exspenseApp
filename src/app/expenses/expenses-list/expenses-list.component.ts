import { Component, OnInit } from '@angular/core';
import {Expense} from'../expenses.model'; 
@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {
  expenses:Expense[] =[
    new Expense('A test expense', 'This is a test','https://www.fm-magazine.com/content/dam/cgma/magazine/news/publishingimages/cgma-reimbursement-fraud-510-x-221.jpg.transform/750w/image.png', '$4.25')
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
