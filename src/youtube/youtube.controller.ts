import { Controller, Get, Param } from '@nestjs/common';
import { YoutubeService } from './youtube.service';

@Controller('youtube')
export class YoutubeController {
  constructor(private readonly youtubeService: YoutubeService) {}

  @Get('playlist/:id')
  async getPlaylist(@Param('id') id: string) {
    return this.youtubeService.getPlaylistVideos(id);
  }
}
