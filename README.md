# Event-Driven Market Signals Backend

Production-style backend system built to demonstrate modern backend + cloud engineering practices using an event-driven architecture.

This project simulates a real-world backend used in fintech and data platforms to ingest, process, and distribute market-related events in a scalable and decoupled way.

---

## Architecture Overview

This system is designed using an **event-driven architecture** to decouple components and improve scalability, fault isolation, and maintainability.

High-level flow:

Client / API  
→ Ingestion API (NestJS)  
→ Domain Event (MarketDataReceivedEvent)  
→ Internal Event Bus  
→ Downstream Consumers (Signal Engine, Analytics, Notifications - extensible)

Each component reacts to events instead of tightly coupled synchronous calls.

---

## Key Features

- Event-driven backend architecture
- REST API for market data ingestion
- Domain events for decoupled processing
- Asynchronous workflows
- Production-style logging and observability
- Containerized services with Docker
- Clean separation of concerns (API, domain, processing)

---

## Tech Stack

- Node.js
- TypeScript
- NestJS
- Docker
- Event-Driven Architecture
- REST APIs
- Domain Events
- Git

---

## Why Event-Driven?

This architecture pattern is widely used in:

- Fintech platforms
- Trading and market data systems
- Payment processing systems
- High-scale backend platforms
- Cloud-native distributed systems

Event-driven systems allow:

- Independent scaling of components
- Loose coupling between services
- Better fault tolerance
- Easier extensibility

---
