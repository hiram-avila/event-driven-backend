import { IsString, IsNumber, IsPositive } from 'class-validator';

export class IngestMarketDataDto {
  @IsString()
  symbol: string;

  @IsNumber()
  @IsPositive()
  price: number;
}
