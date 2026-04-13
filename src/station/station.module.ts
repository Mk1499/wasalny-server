import { Module } from '@nestjs/common';
import { StationService } from './station.service';
import { StationController } from './station.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Station, StationSchema } from './station.schema';

@Module({
  controllers: [StationController],
  providers: [StationService],
  imports: [
    MongooseModule.forFeature([{ name: Station.name, schema: StationSchema }]),
  ],
})
export class StationModule {}
