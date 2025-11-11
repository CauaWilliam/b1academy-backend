import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class YoutubeService {
  private readonly apiKey = process.env.YOUTUBE_API_KEY;
  private readonly baseUrl = 'https://www.googleapis.com/youtube/v3';

  constructor(private readonly http: HttpService) {}

  async getPlaylistVideos(playlistId: string) {
    const playlistUrl = `${this.baseUrl}/playlistItems`;

    const { data} = await firstValueFrom(
      this.http.get(playlistUrl, {
        params: {
          part: 'snippet,contentDetails',
          playlistId,
          maxResults: 50, 
          key: this.apiKey,
        },
      }),
    );

  

    return data.items.map((item: any) => ({
      videoId: item.contentDetails.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails?.medium?.url,
      publishedAt: item.snippet.publishedAt,
    }));
  }
}
