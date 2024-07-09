import { Bootstrapper, JsonSpec } from '@crystallize/import-utilities';
import dotenv from 'dotenv';

dotenv.config();

async function createSpecification() {
  try {
    const bootstrapper = new Bootstrapper();

    /**
     * Access tokens for the account used
     * https://crystallize.com/learn/developer-guides/access-tokens
     */
    const ACCESS_TOKEN_ID = process.env.CRYSTALLIZE_ACCESS_TOKEN_ID as string;
    const ACCESS_TOKEN_SECRET = process.env
      .CRYSTALLIZE_ACCESS_TOKEN_SECRET as string;
    const TENANT_IDENTIFIER = process.env
      .CRYSTALLIZE_TENANT_IDENTIFIER as string;

    if (!ACCESS_TOKEN_ID || !ACCESS_TOKEN_SECRET || !TENANT_IDENTIFIER) {
      throw new Error(
        'Missing environment variables: CRYSTALLIZE_ACCESS_TOKEN_ID, CRYSTALLIZE_ACCESS_TOKEN_SECRET, or CRYSTALLIZE_TENANT_IDENTIFIER',
      );
    }

    bootstrapper.setAccessToken(ACCESS_TOKEN_ID, ACCESS_TOKEN_SECRET);

    // The tenant to create a specification from
    bootstrapper.setTenantIdentifier(TENANT_IDENTIFIER);

    const tenantSpec: JsonSpec = await bootstrapper.createSpec({
      languages: true,
      vatTypes: true,
      priceVariants: true,
      shapes: true,
      topicMaps: true,
      grids: true,
      items: true,
      customers: true,
      orders: true,
      stockLocations: true,
      subscriptionPlans: true,
      onUpdate: areaUpdate => {
        console.log(JSON.stringify(areaUpdate, null, 2));
      },
    });

    console.log(JSON.stringify(tenantSpec, null, 2));
  } catch (error) {
    console.error('Error creating specification:', error);
  } finally {
    process.exit(0);
  }
}

createSpecification();
