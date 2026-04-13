import { Injectable } from '@nestjs/common';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Station } from './station.schema';
import { Model } from 'mongoose';

@Injectable()
export class StationService {
  constructor(
    @InjectModel(Station.name)
    private readonly stationModel: Model<Station>,
  ) {}

  create(createStationDto: CreateStationDto) {
    const newStation = new this.stationModel(createStationDto);
    return newStation.save();
  }

  findAll() {
    return this.stationModel.find().exec();
  }

  findOne(id: number) {
    return this.stationModel.findById(id).exec();
  }

  update(id: number, updateStationDto: UpdateStationDto) {
    return this.stationModel
      .findByIdAndUpdate(id, updateStationDto, { new: true })
      .exec();
  }

  remove(id: number) {
    return this.stationModel.findByIdAndDelete(id).exec();
  }
}
