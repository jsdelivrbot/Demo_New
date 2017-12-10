import { Component, OnInit,ViewChild ,ElementRef} from '@angular/core';

@Component({
  selector: 'app-risk-grade',
  templateUrl: './risk-grade.component.html',
  styleUrls: ['./risk-grade.component.scss']
})
export class RiskGradeComponent implements OnInit {
  constructor(private elRef:ElementRef) {}
  height:number;
  ngOnInit() {}

  togglePanel() {
    console.log('risk panel');
  }
 
  ngAfterViewInit() {
    console.log("Business Case"+this.elRef.nativeElement.parentNode.offsetHeight,this.elRef.nativeElement.parentNode);
    //this.height=this.elRef.nativeElement.parentNode.offsetHeight;
  }
}
