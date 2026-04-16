import { Module } from '@nestjs/common';
import { CompanyAdminService } from './company-admin.service';
import { CompanyAdminController } from './company-admin.controller';

@Module({
  controllers: [CompanyAdminController],
  providers: [CompanyAdminService],
})
export class CompanyAdminModule {}
