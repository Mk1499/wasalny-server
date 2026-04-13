import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from './company.schema';
import { Model } from 'mongoose';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name)
    private readonly companyModel: Model<Company>,
  ) {}

  getAllCompanies() {
    return this.companyModel.find().exec();
  }

  getCompanyById(id: string) {
    return this.companyModel.findById(id).exec();
  }

  createCompany(company: Company) {
    console.log({ company });
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
