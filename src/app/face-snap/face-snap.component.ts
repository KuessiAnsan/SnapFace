import { Router } from '@angular/router';
import { SingleFaceSnapComponent } from './../single-face-snap/single-face-snap.component';
import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../../models/face-snap-model';
import { FaceSnapService } from '../services/face-snaps-service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

  @Input() faceSnap!: FaceSnap;

  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapService, private router:Router){}


  ngOnInit(){
    this.buttonText = 'Oh Snap!';
  }

  onAddOrDeleteSnap(){
    if(this.buttonText === 'Oh Snap!'){
      this.faceSnapsService.snapfaceSnapsById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
    }else{
      this.faceSnapsService.snapfaceSnapsById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }
  }

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
