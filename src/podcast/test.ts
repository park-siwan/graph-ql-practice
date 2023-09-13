import { Field, ObjectType } from '@nestjs/graphql';
import { Podcast } from './entities/podcast.entity';

@ObjectType()
export class PodcastOutput {
  @Field(() => [Podcast], { nullable: true })
  podcasts?: Podcast[];

  @Field({ nullable: true })
  err?: string;
}
