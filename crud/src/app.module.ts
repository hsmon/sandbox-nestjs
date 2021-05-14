import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodsController } from './foods/foods.controller';
import { FoodsService } from './foods/foods.service';
import { FoodsModule } from './foods/foods.module';

@Module({
  imports: [FoodsModule],
  controllers: [AppController, FoodsController],
  providers: [AppService, FoodsService],
})
export class AppModule {}
