import { Injectable } from '@nestjs/common';
import { CreateLineDto } from './dto/create-line.dto';
import { UpdateLineDto } from './dto/update-line.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Route } from './entities/route.entity';
import { Model } from 'mongoose';

@Injectable()
export class RouteService {
  constructor(
    @InjectModel(Route.name)
    private readonly routeModel: Model<Route>,
  ) {}

  create(createLineDto: CreateLineDto) {
    const newLine = new this.routeModel(createLineDto);
    return newLine.save();
  }

  findAll() {
    return this.routeModel.find().exec();
  }

  findOne(id: number) {
    return this.routeModel.findById(id).exec();
  }

  update(id: number, updateLineDto: UpdateLineDto) {
    return this.routeModel
      .findByIdAndUpdate(id, updateLineDto, { new: true })
      .exec();
  }

  remove(id: number) {
    return this.routeModel.findByIdAndDelete(id).exec();
  }
}
