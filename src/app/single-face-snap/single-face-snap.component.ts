import { FaceSnap } from 'src/models/face-snap-model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnapService } from '../services/face-snaps-service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapService,
    private route: ActivatedRoute){}



  ngOnInit(){
    this.buttonText = 'Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getfaceSnapById(faceSnapId);
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

}
