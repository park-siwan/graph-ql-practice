import { Module } from '@nestjs/common';
import { EpisodeController, PodcastsController } from './podcasts.controller';
import { PodcastsService } from './podcasts.service';
import { PodcastResolver } from './podcast.resolver';
import { EpisodesResolver } from './episode.resolver';

@Module({
  controllers: [PodcastsController, EpisodeController],
  providers: [PodcastResolver, EpisodesResolver, PodcastsService],
})
export class PodcastsModule {}
