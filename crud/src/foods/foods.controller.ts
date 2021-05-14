import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { FoodsService } from './foods.service';
import { Food } from './interface/food.interface';
import { ValidationPipe } from 'src/common/pipes/foods.pipe';

@Controller('foods')
export class FoodsController {
  constructor(private foodsService: FoodsService) {}

  @Post()
  async create(@Body(ValidationPipe) createFoodDto: CreateFoodDto) {
    this.foodsService.create(createFoodDto);
  }

  @Get()
  async findAll(): Promise<Food[]> {
    return this.foodsService.findAll();
  }
}
