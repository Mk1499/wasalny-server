import { Injectable } from '@nestjs/common';
import { CreateLineDto } from './dto/create-line.dto';
import { UpdateLineDto } from './dto/update-line.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Line } from './entities/line.entity';
import { Model } from 'mongoose';

@Injectable()
export class LineService {
  constructor(
    @InjectModel(Line.name)
    private readonly lineModel: Model<Line>,
  ) {}

  create(createLineDto: CreateLineDto) {
    const newLine = new this.lineModel(createLineDto);
    return newLine.save();
  }

  findAll() {
    return this.lineModel.find().exec();
  }

  findOne(id: number) {
    return this.lineModel.findById(id).exec();
  }

  update(id: number, updateLineDto: UpdateLineDto) {
    return this.lineModel
      .findByIdAndUpdate(id, updateLineDto, { new: true })
      .exec();
  }

  remove(id: number) {
    return this.lineModel.findByIdAndDelete(id).exec();
  }
}
