import os
import sys
import time
from datetime import datetime

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from vayu_sdk import Vayu
from openapi.models.event import Event

VAYU_API_KEY = os.environ.get("VAYU_API_KEY")
if not VAYU_API_KEY:
    print("Set VAYU_API_KEY environment variable", file=sys.stderr)
    sys.exit(1)

VAYU_HOST = os.environ.get("VAYU_HOST")
vayu = Vayu(api_key=VAYU_API_KEY, host=VAYU_HOST)


def main():
    # --- Customers ---
    print("=== List Customers ===")
    customers = vayu.customers.list(limit=5)
    print(f"Found {customers.total} customers")

    print("\n=== Create Customer ===")
    suffix = f"{int(time.time() * 1000)}-{os.getpid()}"
    external_id = f"example-{suffix}"
    created = vayu.customers.create(
        name=f"SDK Example Customer {suffix}",
        external_id=external_id,
    )
    customer_id = created.customer.id
    print(f"Created customer: {customer_id}")

    print("\n=== Get Customer ===")
    fetched = vayu.customers.get(customer_id)
    print(f"Fetched: {fetched.customer.name}")

    # --- Events ---
    print("\n=== Send Events ===")
    events = [
        Event(
            name="api_call",
            timestamp=datetime.now(),
            customerAlias=external_id,
            ref=f"ref-{suffix}",
            data={"endpoint": "/users", "method": "GET"},
        )
    ]
    send_result = vayu.events.send(events=events)
    print(f"Valid events: {len(send_result.valid_events)}")
    print(f"Invalid events: {len(send_result.invalid_events)}")

    # --- Meters ---
    print("\n=== List Meters ===")
    meters = vayu.meters.list(limit=5)
    print(f"Found {meters.total} meters")
    for meter in meters.meters:
        print(f"  - {meter.id}: {meter.name}")

    # --- Contracts ---
    print("\n=== List Contracts ===")
    contracts = vayu.contracts.list(limit=5)
    print(f"Found {contracts.total} contracts")

    # --- Invoices ---
    print("\n=== List Invoices ===")
    invoices = vayu.invoices.list(limit=5)
    print(f"Found {invoices.total} invoices")

    # --- Catalog Products (new in latest update-sdks) ---
    print("\n=== List Catalog Products ===")
    products = vayu.catalog_products.list(limit=5)
    print(f"Found {products.total} catalog products")

    # --- Cleanup ---
    print("\n=== Delete Customer ===")
    try:
        vayu.customers.delete(customer_id)
        print(f"Deleted customer: {customer_id}")
    except Exception as e:
        print(f"DeleteCustomer failed (non-fatal): {e}")

    print("\nDone!")


if __name__ == "__main__":
    main()
