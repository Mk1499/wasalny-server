import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Company } from 'src/company/company.schema';

export type DriverDocument = Driver & Document;

@Schema({ timestamps: true })
export class Driver {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true, unique: true })
  phone: string;

  @Prop({ required: true })
  password?: string;

  @Prop({ required: true, ref: Company.name })
  company: string;

  @Prop({ default: true })
  isActive: boolean;
}

export const DriverSchema = SchemaFactory.createForClass(Driver);
