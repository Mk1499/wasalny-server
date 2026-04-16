import { Injectable } from '@nestjs/common';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { Driver } from './entities/driver.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DriverService {
  constructor(
    @InjectModel(Driver.name)
    private readonly driverModel: Model<Driver>,
  ) {}

  async create(createDriverDto: CreateDriverDto) {
    const newDriver = new this.driverModel(createDriverDto);
    return newDriver.save();
  }

  async findAll() {
    return this.driverModel
      .find()
      .populate('company', { name: 1, id: 1 })
      .exec();
  }

  async findOne(id: string) {
    return this.driverModel
      .findById(id)
      .populate('company', { name: 1, id: 1 })
      .exec();
  }

  async update(id: string, updateDriverDto: UpdateDriverDto) {
    return this.driverModel
      .findByIdAndUpdate(id, updateDriverDto, { new: true })
      .populate('company', { name: 1, id: 1 })
      .exec();
  }

  async remove(id: string) {
    return this.driverModel.findByIdAndDelete(id).exec();
  }
}
