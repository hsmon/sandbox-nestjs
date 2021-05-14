import { IsInt, IsString, IsBoolean } from 'class-validator';
import { Food } from '../interface/food.interface';

export class CreateFoodDto implements Food {
  @IsString()
  name: string;

  @IsInt()
  calorie: number;

  @IsBoolean()
  yummy: boolean;
}
