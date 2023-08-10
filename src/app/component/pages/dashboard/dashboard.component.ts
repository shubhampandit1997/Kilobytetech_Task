import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HmaService } from 'src/app/service/hma.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  allClient:any=[];

  constructor(
    private _serv : HmaService, private route:Router
  ){
    this._serv.getUser().subscribe(data=>{
      this.allClient.push(data);
      // console.log(this.allClient[0].records[5].assignedMembers[0].name);
    })
  }
  Detail(id:any){
    this._serv.DetailAPI(id).subscribe(data=>{
      this.allClient.push(data);
      this.route.navigate(['/detail',+id])
      
    })
  }
}
