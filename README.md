# Lens BigQuery with node.js

This is an example proejct showing how to query Lens BigQuery Data from a Node.js application.

## Prerequisites

You must first create a Google Cloud project and then a Service Accounts Credential. You'll need to save the service account credential locally as `keyfile.json`.

To learn how to do this, watch [this video](https://www.youtube.com/watch?v=q9qHHEk5rVM).

## Running the app

1. Clone the repo

```sh
git clone git@github.com:dabit3/lens-bigquery-with-node.js.git
```

2. Change into the new directory and install dependencies

```sh
cd ens-bigquery-with-node.js

npm install # or yarn, pnpm
```

3. Save the Key File as `keyfile.json`.

4. Run the app

```sh
node fetchTables.js
```

5. Configure `getProfilePosts` and `getProfileStats` with whichever profile ID you'd like to query for.