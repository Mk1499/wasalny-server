import { IsString, IsNumber } from 'class-validator';

export class CreateStationDto {
  @IsString()
  nameEn: string;
  @IsString()
  nameAr: string;

  @IsNumber()
  lat: number;

  @IsNumber()
  lng: number;
}
