import { Injectable } from '@nestjs/common';
import { Food } from './interface/food.interface';

@Injectable()
export class FoodsService {
  private readonly foods: Food[] = [];

  create(food: Food) {
    console.log(food);
    this.foods.push(food);
  }

  findAll() {
    return this.foods;
  }
}
