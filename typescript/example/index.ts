import { Vayu, Event } from '../sdk';

const VAYU_API_KEY = process.env.VAYU_API_KEY;
const VAYU_HOST = process.env.VAYU_HOST;
if (!VAYU_API_KEY) {
  console.error('Set VAYU_API_KEY environment variable');
  process.exit(1);
}

const vayu = new Vayu(VAYU_API_KEY, VAYU_HOST);

async function main() {
  // --- Customers ---
  console.log('=== List Customers ===');
  const customers = await vayu.customers.list({ limit: 5 });
  console.log(`Found ${customers.total} customers`);

  console.log('\n=== Create Customer ===');
  const suffix = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const created = await vayu.customers.create({
    name: `SDK Example Customer ${suffix}`,
    externalId: `example-${suffix}`,
  });
  const customerId = created.customer.id;
  console.log(`Created customer: ${customerId}`);

  console.log('\n=== Get Customer ===');
  const fetched = await vayu.customers.get(customerId);
  console.log(`Fetched: ${fetched.customer.name}`);

  // --- Events ---
  console.log('\n=== Send Events ===');
  const events: Event[] = [
    {
      name: 'api_call',
      timestamp: new Date(),
      customerAlias: `example-${suffix}`,
      ref: `ref-${suffix}`,
      data: { endpoint: '/users', method: 'GET' },
    },
  ];
  const sendResult = await vayu.events.send(events);
  console.log(`Valid events: ${sendResult.validEvents.length}`);
  console.log(`Invalid events: ${sendResult.invalidEvents.length}`);

  // --- Meters ---
  console.log('\n=== List Meters ===');
  const meters = await vayu.meters.list({ limit: 5 });
  console.log(`Found ${meters.total} meters`);
  for (const meter of meters.meters) {
    console.log(`  - ${meter.id}: ${meter.name}`);
  }

  // --- Contracts ---
  console.log('\n=== List Contracts ===');
  const contracts = await vayu.contracts.list({ limit: 5 });
  console.log(`Found ${contracts.total} contracts`);

  // --- Invoices ---
  console.log('\n=== List Invoices ===');
  const invoices = await vayu.invoices.list({ limit: 5 });
  console.log(`Found ${invoices.total} invoices`);

  // --- Catalog Products (new in latest update-sdks) ---
  console.log('\n=== List Catalog Products ===');
  const products = await vayu.catalogProducts.list({ limit: 5 });
  console.log(`Found ${products.total} catalog products`);

  // --- Cleanup ---
  console.log('\n=== Delete Customer ===');
  try {
    await vayu.customers.delete(customerId);
    console.log(`Deleted customer: ${customerId}`);
  } catch (e) {
    console.log(`DeleteCustomer failed (non-fatal): ${e}`);
  }

  console.log('\nDone!');
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
