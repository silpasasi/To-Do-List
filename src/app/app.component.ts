import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 todoArr : Array<string>=[
   "Go home",
   "Take a nap",
   "Start studying"
 ];
 clear(){
  this.todoArr.splice(0);
}
addTask(val){
  this.todoArr.push(val);
  console.log(this.todoArr);
  localStorage.setItem("a", JSON.stringify(this.todoArr));

}
deleteTask(idx:number){
  console.log('item delete is', idx);
  let do_delete = confirm('Are you sure you want to delete?');
  if(do_delete)
  {
  this.todoArr.splice(idx,1);
  JSON.parse( localStorage.getItem('todoArr'));
  localStorage.setItem("a", JSON.stringify(this.todoArr));
  }
}
ngOnInit(){
 
   localStorage.setItem("a", JSON.stringify(this.todoArr));

}


}
