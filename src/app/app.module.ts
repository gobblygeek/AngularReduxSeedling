import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgRedux, NgReduxModule } from "@angular-redux/store";
import { IAppState, rootReducer, INITIAL_STATE } from "./store";
import { AppComponent } from "./app.component";
import { TodoOverViewComponent } from "./components/todo-overview/todo-overview.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
@NgModule({
  declarations: [AppComponent, TodoOverViewComponent, TodoListComponent],
  imports: [BrowserModule, NgReduxModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
