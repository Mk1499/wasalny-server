import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { StationModule } from './station/station.module';
import { RouteModule } from './route/route.module';
import { DriverModule } from './driver/driver.module';
import { CompanyAdminModule } from './company-admin/company-admin.module';

@Module({
  imports: [
    CompanyModule,
    MongooseModule.forRoot(
      'mongodb+srv://MK:123456789mK14@cluster0.c4uwc.gcp.mongodb.net',
    ),
    UserModule,
    StationModule,
    RouteModule,
    DriverModule,
    CompanyAdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
