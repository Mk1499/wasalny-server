import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanySchema, Company } from './company.schema';
import { Driver, DriverSchema } from 'src/driver/entities/driver.entity';
import { Route, RouteSchema } from 'src/route/entities/route.entity';
import { User, UserSchema } from 'src/user/user.schema';

@Module({
  providers: [CompanyService],
  controllers: [CompanyController],
  imports: [
    MongooseModule.forFeature([
      { name: Company.name, schema: CompanySchema },
      { name: Driver.name, schema: DriverSchema },
      { name: Route.name, schema: RouteSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
})
export class CompanyModule {}
