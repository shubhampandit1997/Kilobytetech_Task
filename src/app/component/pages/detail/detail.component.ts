import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { HmaService } from 'src/app/service/hma.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id:any;
  data:any
  constructor(private route:ActivatedRoute,private _serv : HmaService ){

  }
  ngOnInit(): void{
    this.id = this.route.paramMap['clientId']
    
  }
  Detail(id:any){
    this._serv.DetailAPI(id).subscribe(data=>{
      this.data.push(data);
      
      
    })
  }
}
