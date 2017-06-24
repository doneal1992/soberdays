import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { YoutubeService } from '../../services/youtube.srvc'
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@Component({
  selector: 'page-meditation',
  templateUrl: 'meditation.html',
})
export class MeditationPage {
  vPlayer = true;
  videos = {};
  search = {
    params:''
  };
 
  constructor(private youtubeService: YoutubeService,
    private loadingCtrl:LoadingController, 
    private youtubePlayer: YoutubeVideoPlayer) {
      
  }

  findVideos = ($event) => {
    const loading = this.loadingCtrl.create();

    loading.present();
 
    this.youtubeService.getVideos(this.search.params).subscribe(
      videos => {
        this.videos=videos;
        loading.dismiss();
      },
      err=>{
        console.log(err);
      }
    );
  }
 
  playVideo = (id) => {
    this.youtubePlayer.openVideo(id);
  }
 
}