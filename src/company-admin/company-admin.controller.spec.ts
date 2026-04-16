import { Test, TestingModule } from '@nestjs/testing';
import { CompanyAdminController } from './company-admin.controller';
import { CompanyAdminService } from './company-admin.service';

describe('CompanyAdminController', () => {
  let controller: CompanyAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanyAdminController],
      providers: [CompanyAdminService],
    }).compile();

    controller = module.get<CompanyAdminController>(CompanyAdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
