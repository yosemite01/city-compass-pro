# Soroban Contract: City Compass

This folder contains the Soroban smart contract for City Compass data primitives.

## Structure

- `Cargo.toml` — Soroban contract package config
- `src/lib.rs` — contract implementation with add_hub/get_hub/list_hubs APIs

## What this contract supports

- Add a location hub (slug, name, city, category, rating)
- Retrieve hub by slug
- List all stored hubs

## Quick Start

1. Install Soroban CLI: https://soroban.stellar.org/docs/learn/installation
2. Build contract:

```bash
cd soroban-contract
cargo build --release
```

3. Run tests:

```bash
cd soroban-contract
cargo test
```

## Implementation Plan

1. Define on-chain hub model and storage keys (`hub:<slug>`, `hub_list`).
2. Implement permission model for write operations (admin or account-based). [future]
3. Add hub creation and retrieval APIs.
4. Add rating, metadata, and review APIs as enhancements.
5. Integrate with frontend backend by reading contract data from Sapphire or Soroban RPC.
