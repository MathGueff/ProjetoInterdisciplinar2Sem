import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Tag } from '../../models/tag.model';


@Component({
  selector: 'app-tag-select',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './tag-select.component.html',
  styleUrl: './tag-select.component.css'
})
export class TagSelectComponent {
  constructor(private formBuilder:FormBuilder){}
  tags : Tag[] = [
    {
      id:1,
      nomeTag : "Tag1"
    },
    {
      id:2,
      nomeTag : "Tag2"
    },
    {
      id:3,
      nomeTag : "Tag3"
    },
    {
      id:4,
      nomeTag : "Tag4"
    },
  ];
  form = new FormGroup({
    tagsSelecteds: new FormControl('')
  });
  selecionarTags(){
    
  }
}
