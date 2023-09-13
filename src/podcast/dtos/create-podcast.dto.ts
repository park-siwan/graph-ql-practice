import { ArgsType, Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class CreatePodcastDto {
  @Field()
  readonly title: string;

  @Field()
  readonly category: string;
}
