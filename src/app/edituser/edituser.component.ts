import { Component, Input, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { Person } from '../models/person';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {
 

  person = {} as Person;
  persons: Person[] | undefined;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPersons();
  }

  savePerson(form: NgForm) {
    if (this.person.id !== undefined) {
      this.personService.updatePerson(this.person).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.personService.savePerson(this.person).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  getPersons() {
    this.personService.getPersons().subscribe((persons: Person[]) => {
      this.persons = persons;
    });
  }

  deletePerson(person: Person) {
    this.personService.deletePerson(person).subscribe(() => {
      this.getPersons();
    });
  }

  editPerson(person: Person) {
    this.person = { ...person };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getPersons();
    form.resetForm();
    this.person = {} as Person;
  }


}
