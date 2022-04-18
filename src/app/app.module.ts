import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpensesListComponent } from './expenses/expenses-list/expenses-list.component';
import { ExpensesDetailComponent } from './expenses/expenses-detail/expenses-detail.component';
import { ExpensesItemComponent } from './expenses/expenses-item/expenses-item.component';
import { CurrencyComponent } from './currency/currency.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExpensesComponent,
    ExpensesListComponent,
    ExpensesDetailComponent,
    ExpensesItemComponent,
    CurrencyComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
