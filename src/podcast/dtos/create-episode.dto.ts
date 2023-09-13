import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CreatePodcastDto } from './create-podcast.dto';

@InputType() // GraphQL 입력 타입임을 나타내는 데코레이터
export class CreateEpisodeDto {
  @Field()
  readonly title: string;

  @Field()
  readonly category: string;
}
