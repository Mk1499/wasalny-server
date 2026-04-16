import { Injectable } from '@nestjs/common';
import { CreateCompanyAdminDto } from './dto/create-company-admin.dto';
import { UpdateCompanyAdminDto } from './dto/update-company-admin.dto';

@Injectable()
export class CompanyAdminService {
  create(createCompanyAdminDto: CreateCompanyAdminDto) {
    return 'This action adds a new companyAdmin';
  }

  findAll() {
    return `This action returns all companyAdmin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} companyAdmin`;
  }

  update(id: number, updateCompanyAdminDto: UpdateCompanyAdminDto) {
    return `This action updates a #${id} companyAdmin`;
  }

  remove(id: number) {
    return `This action removes a #${id} companyAdmin`;
  }
}
