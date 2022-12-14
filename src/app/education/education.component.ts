import { Component, Input, OnInit } from '@angular/core';
import { EducationalInstitution } from '../educational-institution';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  @Input()
  educationalInstitutions: EducationalInstitution[] = [];

  constructor() {}

  ngOnInit(): void {}
}
