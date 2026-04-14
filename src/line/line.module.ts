import { Module } from '@nestjs/common';
import { LineService } from './line.service';
import { LineController } from './line.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Line, LineSchema } from './entities/line.entity';

@Module({
  controllers: [LineController],
  providers: [LineService],
  imports: [
    MongooseModule.forFeature([{ name: Line.name, schema: LineSchema }]),
  ],
})
export class LineModule {}
