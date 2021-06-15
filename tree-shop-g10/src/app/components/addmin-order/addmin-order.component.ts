import { Component, OnInit } from '@angular/core';
import { OderService} from '../../services/oder.service'
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageService } from 'angular-web-storage'

@Component({
  selector: 'app-addmin-order',
  templateUrl: './addmin-order.component.html',
  styleUrls: ['./addmin-order.component.css']
})
export class AddminOrderComponent implements OnInit {

  orders:any
  img:string = " "
  
  constructor(private od:OderService,private local:LocalStorageService,private modalService: NgbModal) {this.onLoading() }

  ngOnInit(): void {
  }
  getRole() {
    if (this.local.get('user') === null) {
      return "notLogin"
    }
    return this.local.get('user').result.role
    
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
  openLg(content:any,img:string) {
    this.img = img
    this.modalService.open(content, { size: 'lg' });
  }

  conferm(i:number){
    this.orders[i].status = "success"
    this.od.PutOrder(this.orders[i]).subscribe(
      data =>{
        console.log(data)
      },
      err =>{
        console.log(err);
        
      }
    )
  }
}
