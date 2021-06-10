import { Component, OnInit } from '@angular/core';
import { OderService} from '../../services/oder.service'
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OderComponent implements OnInit {
  button:boolean = false
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


  onChangeImg(e:any){
    if(e.target.files.length > 0){
      const file = e.target.files[0]
      var pattern = /image-*/
      const reader = new FileReader()
      if(!file.type.match(pattern)){
        alert("invalid format")
      }else{
        reader.readAsDataURL(file)
        reader.onload = () =>{
          this.button = true
          /*this.productForm.patchValue({
            img:reader.result
          })*/
        }
      }
    }
  }
 accept(){

 }
}
