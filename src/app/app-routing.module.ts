import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { LoginComponent } from './login/login.component';
import { PredictComponent } from './predict/predict.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'upload-file',component:FileUploadComponent},
  { path:'predict',component:PredictComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
