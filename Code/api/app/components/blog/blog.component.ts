import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'blog-app',
    templateUrl: 'blog.component.html',
    styleUrls: ['blog.component.css'],
    styles: [`
    input-ng-invalid {broder-left: 5px solid red;}
    input-ng-valid {broder-left: 5px solid green;}`]
})

export class BlogComponent {

    model: any = {};
    loading = false;
    returnUrl: string;

    blogForm = new FormGroup({
        title: new FormControl(),
        content: new FormControl(),
        author: new FormControl(),
        image: new FormControl()
    });





    onSubmit() {
        console.log(this.blogForm.value);
    }

    login() {
        console.log('Hai');
    }
}