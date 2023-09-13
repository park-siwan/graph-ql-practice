import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Podcast } from './entities/podcast.entity';
import { CreatePodcastDto } from './dtos/create-podcast.dto';
import { PodcastsService } from './podcasts.service';
import { UpdatePodcastDto } from './dtos/update-podcast.dto';
import { Episode } from './entities/episode.entity';
import { CreateEpisodeDto } from './dtos/create-episode.dto';
import { UpdateEpisodeDto } from './dtos/update-episode.dto';
import { PodcastOutput } from './test';

@Resolver(() => Podcast)
export class PodcastResolver {
  constructor(private readonly podcastsService: PodcastsService) {}

  private handleServiceError(result: { err?: string }) {
    if (result.err) {
      throw new Error(result.err);
    }
  }

  @Query(() => [PodcastOutput])
  async podcasts() {
    const result = await this.podcastsService.getAllPodcasts();
    this.handleServiceError(result);
    return result;
  }

  @Query(() => PodcastOutput)
  async podcast(@Args('id') id: string) {
    const result = await this.podcastsService.getPodcast(id);
    this.handleServiceError(result);
    return result.podcast;
  }

  @Mutation(() => PodcastOutput)
  async createPodcast(@Args('input') input: CreatePodcastDto) {
    const result = await this.podcastsService.createPodcast(input);
    this.handleServiceError(result);
    return { id: result.id, ...input };
  }

  // @Mutation(() => PodcastOutput)
  // async updatePodcast(
  //   @Args('id') id: string,
  //   @Args('input') input: UpdatePodcastDto,
  // ) {
  //   const { podcast, err } = await this.podcastsService.updatePodcast(
  //     id,
  //     input,
  //   );

  //   if (err) {
  //     throw new Error(err);
  //   }

  //   return podcast;
  // }

  @Mutation(() => Boolean)
  async deletePodcast(@Args('id') id: string) {
    const result = await this.podcastsService.deletePodcast(id);
    this.handleServiceError(result);
    return true;
  }
}
