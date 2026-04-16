import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from './company.schema';
import { Model, Types } from 'mongoose';
import { Driver } from 'src/driver/entities/driver.entity';
import { Route } from 'src/route/entities/route.entity';
import { User } from 'src/user/user.schema';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name)
    private readonly companyModel: Model<Company>,
    @InjectModel(Driver.name)
    private readonly driverModel: Model<Driver>,
    @InjectModel(Route.name)
    private readonly routeModel: Model<Route>,
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  getAllCompanies() {
    return this.companyModel.find().exec();
  }

  async getCompanyById(id: string) {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid company ID format');
    }

    const company = await this.companyModel.findById(id).lean().exec();
    if (!company) {
      throw new NotFoundException('Company not found');
    }

    // 2. Run independent queries in parallel
    const [drivers, riders, routes] = await Promise.all([
      this.driverModel.find({ company: id }).lean().exec(),
      this.userModel.find({ company: id }).lean().exec(),
      this.routeModel.find({ company: id }).lean().exec(),
    ]);

    return { ...company, drivers, riders, routes };
  }

  createCompany(company: Company) {
    const newCompany = new this.companyModel(company);
    return newCompany.save();
  }

  updateCompany(id: string, company: Company) {
    return this.companyModel
      .findByIdAndUpdate(id, company, { new: true })
      .exec();
  }

  deleteCompany(id: string) {
    return this.companyModel.findByIdAndDelete(id).exec();
  }
}
