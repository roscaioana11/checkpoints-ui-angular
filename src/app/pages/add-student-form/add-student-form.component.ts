import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.css']
})
export class AddStudentFormComponent implements OnInit {
  addStudentForm = this.fb.group({
    name: ['', Validators.required]
  })

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<AddStudentFormComponent>) {
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.addStudentForm.value);
  }
}
