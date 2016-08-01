import { Component, Input, Output } from '@angular/core';

@Component({
    selector: 'text-input',
    template: `<span>{{title}} : </span><input type="text" [attr.placeholder]="title" [attr.id]="id" />`
})

export class TextInput {
    @Input() title: string;
    @Input('tag-id') id: string;
    constructor() {}
}