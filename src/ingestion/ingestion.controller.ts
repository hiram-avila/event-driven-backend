import { Controller, Post, Body, Logger } from '@nestjs/common';
import { IngestionService } from './ingestion.service';
import { IngestMarketDataDto } from './dto/ingest-market-data.dto';

@Controller('ingestion')
export class IngestionController {
  private readonly logger = new Logger(IngestionController.name);

  constructor(private readonly ingestionService: IngestionService) {}

  @Post('market-data')
  receiveMarketData(@Body() body: IngestMarketDataDto) {
    this.logger.log(
      `HTTP_RECEIVED Market data -> ${JSON.stringify(body)}`,
    );

    const event = this.ingestionService.ingestMarketData(
      body.symbol,
      body.price,
    );

    return {
      status: 'accepted',
      event,
    };
  }
}
