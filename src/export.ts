import { Bootstrapper, JsonSpec } from "@crystallize/import-utilities";

async function createSpecification() {
  const bootstrapper = new Bootstrapper();

  /**
   * Access tokens for the account used
   * https://crystallize.com/learn/developer-guides/access-tokens
   */
  const ACCESS_TOKEN_ID = process.env.CRYSTALLIZE_ACCESS_TOKEN_ID as string;
  const ACCESS_TOKEN_SECRET = process.env
    .CRYSTALLIZE_ACCESS_TOKEN_SECRET as string;
  const TENANT_IDENTIFIER = process.env.CRYSTALLIZE_TENANT_IDENTIFIER as string;

  bootstrapper.setAccessToken(ACCESS_TOKEN_ID, ACCESS_TOKEN_SECRET);

  // The tenant to create a specification from
  bootstrapper.setTenantIdentifier(TENANT_IDENTIFIER);

  const tenantSpec: JsonSpec = await bootstrapper.createSpec({
    // languages: true,
    // vatTypes: true,
    // priceVariants: true,
    // shapes: true,
    // topicMaps: true,
    // grids: true,
    // items: true,
    // onUpdate: (areaUpdate) => {
    //   console.log(JSON.stringify(areaUpdate, null, 1));
    // },
    languages: true,
    vatTypes: true,
    priceVariants: true,
    shapes: true,
    topicMaps: true,
    grids: true,
    items: true,
    customers: true,
    orders: true,
    onUpdate: (areaUpdate) => {
      console.log(JSON.stringify(areaUpdate, null, 1));
    },
    stockLocations: true,
    subscriptionPlans: true,
  });

  console.log(JSON.stringify(tenantSpec, null, 1));
  process.exit(0);
}

createSpecification();
