import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  statuses = ['stable', 'critical', 'finished'];

  ngOnInit() {
    this.form = new FormGroup({
      'projectData': new FormGroup({
        'name': new FormControl(null, [Validators.required], this.forbiddenEmails),
        'status': new FormControl("critical", [Validators.required])
      }),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'tags': new FormArray([]),
      'tags2': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.form);
  }

  onAddTag() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.form.get('tags')).push(control);
  }

  onAddTag2() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.form.get('tags2')).push(control);
  }
  
  
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({'projectIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
/** 
<!--
Create a Form with the following Controls and Validators
1) Project Name (should not be empty)
2) Mail (should not be a empty and a valid email)
3) Project Status Dropdown, with three values: 'Stable', 'Critical', 'Finished'
4) Submit Button

Add your own Validator which doesn't allow "Test" as a Project Name

Also implement that Validator as an async Validator (replace the other one)

Upon submitting the form, simply print the value to the console
-->
*/