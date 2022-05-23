import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Router } from '@angular/router'
@Component({
  selector: 'app-dialog-comprar',
  templateUrl: './dialog-comprar.component.html',
  styleUrls: ['./dialog-comprar.component.css']
})
export class DialogComprarComponent implements OnInit {

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<DialogComprarComponent>,
    @Inject(MAT_DIALOG_DATA) public message: String) { }  

  ngOnInit(): void {
  }

  // no(){
  //   this.dialogRef.close();

  // }

  // si(){
  //   this.dialogRef.close();
  // }
}
