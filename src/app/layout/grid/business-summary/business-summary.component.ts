import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';

@Component({
  selector: 'app-business-summary',
  templateUrl: './business-summary.component.html',
  styleUrls: ['./business-summary.component.scss']
})
export class BusinessSummaryComponent implements OnInit {

  constructor(private elRef:ElementRef) { }
 
  ngOnInit() {
  }
  ngAfterViewInit() {
    console.log(this.elRef.nativeElement.parentNode,this.elRef.nativeElement.parentNode.offsetHeight);
  }

}
