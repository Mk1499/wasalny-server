import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { StationModule } from './station/station.module';
import { LineModule } from './line/line.module';

@Module({
  imports: [
    CompanyModule,
    MongooseModule.forRoot(
      'mongodb+srv://MK:123456789mK14@cluster0.c4uwc.gcp.mongodb.net',
    ),
    UserModule,
    StationModule,
    LineModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
