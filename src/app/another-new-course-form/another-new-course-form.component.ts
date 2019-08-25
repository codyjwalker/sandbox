import { Component } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-another-new-course-form',
  templateUrl: './another-new-course-form.component.html',
  styleUrls: ['./another-new-course-form.component.css']
})
export class AnotherNewCourseFormComponent {

  form2 = new FormGroup({
    name: new FormControl('', Validators.required),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    }),
    topics: new FormArray([])
  });

  /* Builds same form as form2 above, but using FormBuilder instead. */
  form3;
  constructor(fb: FormBuilder) {
    this.form3 = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });
  }

  form = new FormGroup({
    topics: new FormArray([])
  });


  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

}
