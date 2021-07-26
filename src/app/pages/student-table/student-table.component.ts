import {Component, OnInit} from '@angular/core';
import {Student, StudentsService} from "../../services/students.service";
import {WebsocketService} from "../../services/websocket.service";

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {
  students: Student[] = [];
  displayedColumns = ['id', 'name'];

  constructor(private studentService: StudentsService, private websocketService: WebsocketService) {
    studentService.getAll().subscribe(students => this.students = students);
    websocketService.subscribe(student => {
      this.students.push(student)
      this.students = [...this.students];
    });
  }

  ngOnInit(): void {
  }

}
g
