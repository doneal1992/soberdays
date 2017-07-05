import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { YoutubeService } from '../../services/youtube.service'
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@Component({
  selector: 'page-meditation',
  templateUrl: 'meditation.html',
})
export class MeditationPage {
  vPlayer = true;
  videos = {};
  search = {
    params:'meditation music'
  };
 
  constructor(private youtubeService: YoutubeService,
    private loadingCtrl:LoadingController, 
    private youtubePlayer: YoutubeVideoPlayer) {
    this.findVideos();
  }

  findVideos = ($event?) => {
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