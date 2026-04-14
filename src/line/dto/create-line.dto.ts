import { IsString, IsArray, IsMongoId } from 'class-validator';
import { Types } from 'mongoose';

export class CreateLineDto {
  @IsString()
  nameEn: string;
  @IsString()
  nameAr: string;
  @IsMongoId()
  company: Types.ObjectId;
  @IsMongoId()
  driver: Types.ObjectId;
  @IsArray()
  @IsMongoId()
  stations: Types.ObjectId[];
}
