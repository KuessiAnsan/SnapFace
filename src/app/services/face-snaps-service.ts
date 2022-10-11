import { Injectable } from "@angular/core";
import { FaceSnap } from "src/models/face-snap-model";

@Injectable({
    providedIn: 'root' //This service should be save at the root of the project
})
export class FaceSnapService {
  faceSnaps:FaceSnap[] = [
    {
      id: 1,
      title:'Kuessi-Ansan',
      description:'Me me me meeeeeeeeee',
      creationDate: new Date(),
      snaps: 100,
      imageUrl:'https://cdn.pixabay.com/photo/2019/06/05/08/37/dog-4253238_960_720.jpg',
      location: 'Paris'
    },

    {
      id:2,
      title:'Adéshina',
      description:'This is Adé...the singer',
      creationDate: new Date(),
      snaps:8000,
      imageUrl:'https://media-exp1.licdn.com/dms/image/D4E03AQFzP6MUR6ob5w/profile-displayphoto-shrink_800_800/0/1663841285330?e=1671062400&v=beta&t=mg7lczn5D2rKiN-nq2OVEP5Eo5lr4jrUyrXxlETSJzs',
      location: 'Kigali'
    },

    {
      id:3,
      title:'Manzama KARABOU',
      description:'This is Manz',
      creationDate: new Date(),
      snaps:15,
      imageUrl:'https://media-exp1.licdn.com/dms/image/C5603AQH4AtRMQH1EiA/profile-displayphoto-shrink_800_800/0/1659463622328?e=1671062400&v=beta&t=lw7nXCzjshgWYgkfMFtpZ2hm2XV90vXVqxWDwbQpTYc'
    },

    {
      id:4,
      title:'Eugène',
      description:'This is Eugène...the coder',
      creationDate: new Date(),
      snaps:8,
      imageUrl:'https://media-exp1.licdn.com/dms/image/C4E03AQE-SQrYYOVmUA/profile-displayphoto-shrink_800_800/0/1661708621156?e=1671062400&v=beta&t=qF47gySEVdIuYJMbYas4yQGrgV1FBPxL7prbRB3I-_4',
      location: 'Accra'
    }
  ];


  getAllfaceSnaps():FaceSnap[]{
    return this.faceSnaps;
  }

  getfaceSnapById(faceSnapId:number){
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);

    if(!faceSnap){
      throw new Error('faceSnap not found');
    }else{
      return faceSnap;
    }
  }

  snapfaceSnapsById(faceSnapId:number, snapType: 'snap' | 'unsnap'):void{ //LITERAL TYPES, YOU CAN ONLY USE 'SNAP' OR 'UNSNAP' IN THE METHOD
    // const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id===faceSnapId);
    // if(faceSnap){
    //   faceSnap.snaps++;
    // }else{
    //   throw new Error('faceSnap not found !!');
    // }

    const faceSnap = this.getfaceSnapById(faceSnapId);

    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--; //TERNARY CONDITION

  }

  deleteSnapById(faceSnapId:number):void{
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id===faceSnapId);

    if(faceSnap){
      faceSnap.snaps--;
    }else{
      throw new Error('Snap not found');
    }
  }

}
