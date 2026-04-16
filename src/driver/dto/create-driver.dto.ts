import { IsMongoId, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class CreateDriverDto {
  @IsString()
  name: string;
  @IsString()
  phone: string;
  @IsString()
  email: string;
  @IsString()
  password: string;
  @IsMongoId()
  company: Types.ObjectId;
}
