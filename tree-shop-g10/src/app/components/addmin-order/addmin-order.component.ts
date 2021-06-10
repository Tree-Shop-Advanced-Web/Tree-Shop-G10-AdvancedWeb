import { Component, OnInit } from '@angular/core';
import { OderService} from '../../services/oder.service'
@Component({
  selector: 'app-addmin-order',
  templateUrl: './addmin-order.component.html',
  styleUrls: ['./addmin-order.component.css']
})
export class AddminOrderComponent implements OnInit {

  orders:any
  constructor(private od:OderService) {this.onLoading() }

  ngOnInit(): void {
  }
  onLoading(){
    try{
      this.od.getOders().subscribe(
        data =>{
          this.orders = data
        },
        err =>{
           console.log(err);
        }
      )
    }catch(err){
      console.log(err);
      
    }
  }
}
