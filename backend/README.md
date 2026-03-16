# Rust Backend: City Compass API

This folder contains a starter Actix Web backend for City Compass.

## Structure

- `Cargo.toml` — backend package config
- `src/main.rs` — API server with `/api/hubs` and `/api/hub/{slug}` endpoints

## Quick Start

```bash
cd backend
cargo run
```

Open http://127.0.0.1:8080/api/hubs to verify.

## Implementation Plan

1. Build a data model for hubs and review summaries.
2. Add persistent storage (PostgreSQL/SQLite) and migration scripts.
3. Add repository layer and service layer for clean architecture.
4. Create API endpoints for listing hubs, fetching detail, searching by category and city.
5. Integrate with Soroban contract by reading hub state from Stellar RPC and caching in backend.
6. Add auth and admin endpoints for saving hubs to contract and backend.

## Next steps

- Add `CityHub` domain models and validator logic.
- Add logging, metrics, and health checks.
- Add CI test workflows for backend endpoints.
