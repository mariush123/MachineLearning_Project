import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  @ViewChild('fileSelect') myInputVariable?: ElementRef;
  
  filename: any;
  format: any;
  formfile: any;
  file:any;
  periodicity:any;
  duration:number|undefined;

  constructor(
    private http: HttpClient,
    private router: Router
    
  ) { }

  ngOnInit(): void {
  }
  onFileSelect(event: any) {
       this.file = event.target.files[0];
       this.filename=this.file.name;
       this.formfile=new  FormData();
       this.formfile.append('file',this.file)
  }
  fileUpload() {
    return this.http.post("http://localhost:5000/upload",this.formfile).subscribe(()=>{
      return "Success"
    });
  }
  sendData(){
    const data={
      option:this.periodicity,
      value:this.duration
    }
    return this.http.post('http://localhost:5000/data',data).subscribe(()=>{
      return "Success"
    });
  }   
  deleteFile(){
    this.file = null;
    this.format = null;
    this.filename = null;
    this.formfile.delete('file');
    // this.fileSelect
    
  }
  submit(){
    this.sendData();
    this.fileUpload();
    this.router.navigate(['/predict']);
  }
}
