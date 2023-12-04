# Invoice App Exercise

## Running Locally

1. Clone project locally

2. Install dependencies

```bash

npm  install

# or

yarn  install

# or

pnpm  install

```

3. Start server locally

```bash

npm  run  serve

# or

yarn  serve

# or

pnpm  serve

```

4. Start frontend locally

```bash

npm  run  dev

# or

yarn  dev

# or

pnpm  dev

```

## Data API

This api uses json-server, see official documentation to learn more about it: [https://github.com/typicode/json-server](https://github.com/typicode/json-server)

### All invoices:

```
method: GET
route: http://localhost:3004/invoices
```

### Filter invoices:

```
method: GET
route: http://localhost:3004/invoices?status={statusValue}
```

### Order of invoices:

- Add `_sort` and `_order` (ascending order by default)

```
method: GET
route: http://localhost:3004/invoices?_sort={sortParam}&_order={asc | desc}
```

### Single invoice:

```
method: GET
route: http://localhost:3004/invoices/{id}
```

### Create new invoice:

```
method: POST
body: {
   invoice_data
}
route: http://localhost:3004/invoices
```

### Update invoice:

```
method: PATCH
body: {
   invoice_data
}
route: http://localhost:3004/invoices/{id}
```

### Delete invoice:

```
method: DELETE
route: http://localhost:3004/invoices/{id}
```
