import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_we16304';
  name = 'quanlvph1794';
  class = 'we16304';

  teachers = [
    {
      id: 1,
      name: "GV1",
      age: 60,
      gender: 1,
      avatar: "https://picsum.photos/100",
      status: 0
    },
    {
      id: 2,
      name: "GV2",
      age: 25,
      gender: 0,
      avatar: "https://picsum.photos/100",
      status: 1
    },
    {
      id: 3,
      name: "GV3",
      age: 25,
      gender: 0,
      avatar: "https://picsum.photos/100",
      status: 1
    },
    {
      id: 4,
      name: "GV4",
      age: 50,
      gender: 1,
      avatar: "https://picsum.photos/100",
      status: 0
    },
    {
      id: 5,
      name: "GV5",
      age: 25,
      gender: 1,
      avatar: "https://picsum.photos/100",
      status: 1
    }
  ]

  studentName= 'Minhmv'
  studentId= 'PH17968'

  schoolName = '';

  clickH1(){
    console.log('Da click vao H1');
    this.schoolName = 'Poly';
  }

  showStatus = true;
  changeTableStatus(){
    this.showStatus = !this.showStatus;
  }
  inputValue = "update";
  changeInput(event:any){
    this.inputValue = event.target.value;
  }


  //dinh nghia ham nhan gia tri tu cac input
  inputValues = {
    name: '', // đang có ở Input
    age: '', // đang có ở input nhưng là chuỗi
  };
  
  // onInputName(event: any, info: string){
  //   this.inputValues['name'] = event.target.value;
  // }
  // onInputAge(event: any, info: string){
  //   this.inputValues.age = event.target.value;
  // }

  // key: 'name' | 'age' -> key chi dc la gia tri 'name' hoac 'age'
  onInput(event: any, key: 'name' | 'age') {
    this.inputValues[key] = event.target.value;
  }

  //Su kien click vao nut Submit
  onSubmit() {
    console.log(this.inputValues);
    // Thêm dữ liệu vừa thao tác ở form vào mảng teachers
    this.teachers.push({
      ...this.inputValues,
      age: +this.inputValues.age, // đưa age từ chuỗi input về số,
      gender : 0,
      avatar : '',
      status : 0,
      id : this.teachers.length +1
    })
    // cập nhật lại giá trị cho input ở form :
    //  [value] = "this.inputValues.name"
    this.inputValues = {
      name : '',
      age : ''
    }
    
  }
}