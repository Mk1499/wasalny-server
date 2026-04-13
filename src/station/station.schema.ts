import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type StationDocument = Station & Document;

@Schema({ timestamps: true })
export class Station {
  @Prop({ required: true })
  nameEn: string;
  @Prop({ required: true })
  nameAr: string;
  @Prop({ required: true })
  lat: number;

  @Prop({ required: true })
  lng: number;
}

export const StationSchema = SchemaFactory.createForClass(Station);
