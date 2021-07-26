import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatRippleModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {HeaderComponent} from './compoonents/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FooterComponent} from './components/footer/footer.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {StudentsPageComponent} from './pages/students-page/students-page.component';
import {CheckpointsPageComponent} from './pages/checkpoints-page/checkpoints-page.component';
import {StudentTableComponent} from './pages/student-table/student-table.component';
import {MatTableModule} from "@angular/material/table";
import {AddStudentFormComponent} from './pages/add-student-form/add-student-form.component';
import {MatDialogModule} from "@angular/material/dialog";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    StudentsPageComponent,
    CheckpointsPageComponent,
    StudentTableComponent,
    AddStudentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatRippleModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
