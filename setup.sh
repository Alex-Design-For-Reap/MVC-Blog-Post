#!/bin/bash

# Install dependencies
npm install

# Apply database schema
psql $DATABASE_URL -f db/schema.sql
