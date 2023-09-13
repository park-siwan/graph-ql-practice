import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Episode {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  category: string;

  @Field(() => Int)
  rating: number;
}

@InputType()
export class EpisodeInput {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  category: string;

  @Field(() => Int)
  rating: number;
}
