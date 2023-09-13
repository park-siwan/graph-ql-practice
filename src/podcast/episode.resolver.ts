import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Podcast } from './entities/podcast.entity';
import { CreatePodcastDto } from './dtos/create-podcast.dto';
import { PodcastsService } from './podcasts.service';
import { UpdatePodcastDto } from './dtos/update-podcast.dto';
import { Episode } from './entities/episode.entity';
import { CreateEpisodeDto } from './dtos/create-episode.dto';
import { UpdateEpisodeDto } from './dtos/update-episode.dto';

@Resolver(() => Episode)
export class EpisodesResolver {
  constructor(private readonly podcastsService: PodcastsService) {}

  @Query(() => [Episode])
  async episodes(@Args('podcastId') podcastId: string) {
    const { episodes, err } = this.podcastsService.getEpisodes(podcastId);
    if (err) {
      throw new Error(err);
    }
    return episodes;
  }

  @Mutation(() => Episode)
  async createEpisode(
    @Args('podcastId') podcastId: string,
    @Args('input') input: CreateEpisodeDto,
  ) {
    const { episodeId, err } = this.podcastsService.createEpisode(
      podcastId,
      input,
    );
    if (err) {
      throw new Error(err);
    }
    return { id: episodeId, ...input };
  }

  @Mutation((returns) => Boolean)
  async deleteEpisode(
    @Args('podcastId') podcastId: string,
    @Args('episodeId') episodeId: string,
  ) {
    const { err } = this.podcastsService.deleteEpisode(podcastId, episodeId);
    if (err) {
      throw new Error(err);
    }
    return true;
  }

  @Query(() => Episode)
  async findEpisode(
    @Args('podcastId') podcastId: string,
    @Args('episodeId') episodeId: string,
  ) {
    const { episode, err } = this.podcastsService.findEpisode(
      podcastId,
      episodeId,
    );

    if (err) {
      throw new Error(err);
    }
    return episode;
  }

  @Mutation(() => Episode)
  async updateEpisode(
    @Args('podcastId') podcastId: string,
    @Args('episodeId') episodeId: string,
    @Args('input') input: UpdateEpisodeDto,
  ) {
    const { err } = this.podcastsService.updateEpisode(
      podcastId,
      episodeId,
      input,
    );
    if (err) {
      throw new Error(err);
    }
    return { id: episodeId, ...input };
  }
}
