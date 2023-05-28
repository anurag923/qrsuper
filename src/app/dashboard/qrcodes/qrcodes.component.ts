import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
declare var $:any;
import jspdf from "jspdf";
import html2canvas from "html2canvas";

@Component({
  selector: 'app-qrcodes',
  templateUrl: './qrcodes.component.html',
  styleUrls: ['./qrcodes.component.css']
})
export class QrcodesComponent implements OnInit{

  qrcodes:any;
  users:any;
  clientid!:string;
  qrid!:string;

  constructor(private auth:AuthService){

  }

  ngOnInit(): void {
    this.auth.getuserdatas().subscribe((res)=>{
      console.log(res);
      this.users = res.result;
    })
    this.auth.getqrcodes().subscribe((res)=>{
      console.log('res_qr',res)
      this.qrcodes = res.result;
    })
  }

  assignqr(event:any,qrid:any){
    this.clientid = event.target.value;
    this.qrid = qrid;
    $('#staticBackdrop').modal('show')
  }

  confirm(){
    console.log('testing',this.clientid , this.qrid);
    let data = {
      "client_id":this.clientid,
      "qrcode_id":this.qrid
    }

    this.auth.assignqr(data).subscribe((res)=>{
      console.log('res_assign',res);
      $('#staticBackdrop').modal('hide');
      // location.reload();
      // this.auth.getuserdatas().subscribe((res)=>{
      //   console.log(res);
      //   this.users = res;
      // })
    })
  }

  createqr(){
    this.auth.createqr({}).subscribe((res)=>{
      console.log('createqr',res);
      this.auth.getqrcodes().subscribe((res)=>{
        console.log('res_qr',res)
        this.qrcodes = res.result;
      })
    })
  }

  captureQRcode(id:any) {
    var data = document.getElementById(id) as HTMLElement;
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;
  
      const contentDataURL = canvas.toDataURL("image/png");
      let pdf = new jspdf("p", "mm", "a4"); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
      pdf.save(`${id}.pdf`); // Generated PDF
    });
  }
}
