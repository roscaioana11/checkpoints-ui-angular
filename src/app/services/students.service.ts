import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Student {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>('http://localhost:8080/students');
  }

  save(result: Student) {
    this.http.post('http://localhost:8080/students', result, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(result => console.log(result));
  }
}
