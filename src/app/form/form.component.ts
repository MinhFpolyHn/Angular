import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  inputValues = {
    id:0,
    name:'',
    age:0,
    email:'',
    sdt:"",
    avatar:''
   
  }
  users = [
    {
      id:1,
      name:'minhmvph17968',
      age:20,
      email:'minhmvph17968@fpt.edu.vn',
      sdt:'0376517352',
      avatar:"https://www.saga.vn/uploads/%E1%BA%A2nh%20m%C3%B4%20t%E1%BA%A3/anhmota_-how-to-take-and-edit-photos-without-hiring-a-professional.jpg"
     
    },
    {
      id:15,
      name:'minhmvph17969',
      age:20,
      email:'minhmvph17968@fpt.edu.vn',
      sdt:'0376517352',
      avatar:"https://www.saga.vn/uploads/%E1%BA%A2nh%20m%C3%B4%20t%E1%BA%A3/anhmota_-how-to-take-and-edit-photos-without-hiring-a-professional.jpg"
     
    },
    {
      id:10,
      name:'minhmvph17970',
      age:20,
      email:'minhmvph17968@fpt.edu.vn',
      sdt:'0376517352',
      avatar:"https://www.saga.vn/uploads/%E1%BA%A2nh%20m%C3%B4%20t%E1%BA%A3/anhmota_-how-to-take-and-edit-photos-without-hiring-a-professional.jpg"
    }
  ];
  onSubmit(userForm:NgForm){
    //1.Tìm ID lớn nhất
    const userIds = this.users
    .map(user => user.id)
    .sort((a,b)=> a - b);
    console.log(userIds)
    const newId = userIds[userIds.length - 1];

    //Nếu inputValues có id = 0 thì là thêm mới -> 2.
    //Nếu inputValues có id != 0 thì là chỉnh sửa -> 2.1
    if(this.inputValues.id == 0){
      
    
    //2. Thêm vào mảng
    this.users.push({
      ...userForm.value,
      id: newId +1
    });
  }else{
    //2.1 Chỉnh sửa
    const idx = this.users.findIndex((user)=>user.id === this.inputValues.id);
    if(idx > -1){
      this.users[idx]= {
        ...userForm.value,id: this.inputValues.id
      } 
    }
    
  }

    //3. Cập nhật lại giá trị ban đầu
    //useForm.resetForm(); //Nếu không truyền gì thì tất cả về null
    userForm.resetForm({
      name:'',
      age: 0,
      email:'',
      sdt:'',
      avatar:''
     
    })
  }

  onDelete(userId: number){
    this.users = this.users.filter((users)=>users.id !== userId);
  }
  onEdit(userId: number){
    //1. Tìm ra user có id là userId truyền vào
    const editUser = this.users.find((user)=>user.id === userId);
    //2. Nếu tìm ra thì mới gán giá trị lên form
    if(editUser){
      this.inputValues = {... editUser};
    }
  }
}
