import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  @Input () avatar:String;
  @Input () age: number;

  constructor() {
    this.avatar = '';
    this.age = 0;
   }

  ngOnInit(): void {
  }

}
