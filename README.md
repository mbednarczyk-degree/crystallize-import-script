# Crystallize Data Import/Export Scripts

This repository provides two example scripts for importing (`index.ts`) and exporting (`export.ts`) data to/from Crystallize.

## Getting Started

To use these scripts, follow the steps below:

### Installation

First, install the necessary dependencies using `pnpm`:

pnpm install

### Configuration

Ensure you have the following environment variables set up in your `.env` file:

CRYSTALLIZE_ACCESS_TOKEN_ID=your-access-token-id
CRYSTALLIZE_ACCESS_TOKEN_SECRET=your-access-token-secret
CRYSTALLIZE_TENANT_IDENTIFIER=your-tenant-identifier

#### Where to Find Your Crystallize Credentials

1. **Access Token ID and Secret**:

   - Log in to your Crystallize account.
   - Navigate to **Settings** > **API Keys**.
   - Create a new API key if you don't have one, and note down the Access Token ID and Secret.

2. **Tenant Identifier**:
   - The tenant identifier is typically found in your Crystallize project settings. It is a unique identifier for your Crystallize tenant.

### Running the Scripts

After setting up your environment variables and installing the dependencies, you can run the import or export scripts using the following commands:

#### Import Data

To import data into Crystallize, run:

npx tsx src/index.ts

#### Export Data

To export data from Crystallize, run:

npx tsx src/export.ts

## Overview

- **Import Script (`index.ts`)**: This script allows you to import data into Crystallize.
- **Export Script (`export.ts`)**: This script enables you to export data from Crystallize.

Make sure to configure your Crystallize access tokens and other necessary parameters within the scripts before running them.

## Notes

- The scripts are written in TypeScript and use the `tsx` utility for running TypeScript files directly.
- Modify the scripts as needed to fit your specific import/export requirements.

Happy coding!
