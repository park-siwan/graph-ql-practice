import { ArgsType, Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateEpisodeDto {
  @Field(() => String, { nullable: true })
  title?: string;
  @Field(() => String, { nullable: true })
  category?: string;
  @Field(() => Int, { nullable: true })
  rating?: number;
}
