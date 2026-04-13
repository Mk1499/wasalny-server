import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { Company } from './company.schema';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  getAllCompanies() {
    return this.companyService.getAllCompanies();
  }

  @Get(':id')
  getCompanyById(@Param('id') id: string) {
    return this.companyService.getCompanyById(id);
  }

  @Post()
  createCompany(@Body() company: Company) {
    return this.companyService.createCompany(company);
  }

  @Put(':id')
  updateCompany(@Param('id') id: string, @Body() company: Company) {
    return this.companyService.updateCompany(id, company);
  }

  @Delete(':id')
  deleteCompany(@Param('id') id: string) {
    return this.companyService.deleteCompany(id);
  }
}
