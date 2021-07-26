import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddStudentFormComponent} from "../add-student-form/add-student-form.component";
import {StudentsService} from "../../services/students.service";
import {WebsocketService} from "../../services/websocket.service";

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.css']
})
export class StudentsPageComponent implements OnInit, OnDestroy {

  constructor(private dialog: MatDialog,
              private studentService: StudentsService,
              private ws: WebsocketService) {
  }

  ngOnInit(): void {
    this.ws.connect();
  }

  openStudentDialog() {
    let dialogRef = this.dialog.open(AddStudentFormComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.studentService.save(result);
      }
    });
  }

  ngOnDestroy(): void {
    this.ws.disconnect();
  }
}
