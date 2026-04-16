import { Module } from '@nestjs/common';
import { RouteService } from './route.service';
import { RouteController } from './route.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Route, RouteSchema } from './entities/route.entity';

@Module({
  controllers: [RouteController],
  providers: [RouteService],
  imports: [
    MongooseModule.forFeature([{ name: Route.name, schema: RouteSchema }]),
  ],
})
export class RouteModule {}
