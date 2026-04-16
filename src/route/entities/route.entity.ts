import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Company } from 'src/company/company.schema';
import { Station } from 'src/station/station.schema';
import { User } from 'src/user/user.schema';

export type RouteDocument = Route & Document;

@Schema({ timestamps: true })
export class Route {
  @Prop({ required: true })
  nameEn: string;
  @Prop({ required: true })
  nameAr: string;
  @Prop({ required: true, type: Types.ObjectId, ref: Company.name })
  company: Types.ObjectId;
  @Prop({ required: true, type: Types.ObjectId, ref: User.name })
  driver: Types.ObjectId;
  @Prop({ required: true, type: [Types.ObjectId], ref: Station.name })
  stations: Types.ObjectId[];
  @Prop({ type: [Types.ObjectId], ref: User.name })
  riders: Types.ObjectId[];
}

export const RouteSchema = SchemaFactory.createForClass(Route);
