export class MarketDataReceivedEvent {
  constructor(
    public readonly symbol: string,
    public readonly price: number,
    public readonly timestamp: string,
    public readonly source: string,
  ) {}
}
