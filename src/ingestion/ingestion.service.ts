import { Injectable, Logger } from '@nestjs/common';
import { MarketDataReceivedEvent } from './events/market-data-received.event';

@Injectable()
export class IngestionService {
  private readonly logger = new Logger(IngestionService.name);

  ingestMarketData(symbol: string, price: number) {
    const event = new MarketDataReceivedEvent(
      symbol,
      price,
      new Date().toISOString(),
      'SIMULATED_API',
    );

    this.logger.log(
      `EVENT_PUBLISHED MarketDataReceivedEvent -> ${JSON.stringify(event)}`,
    );

    return event;
  }
}
