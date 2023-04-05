import { BigQuery } from '@google-cloud/bigquery'
import fs from 'fs'
const keyFilename = './keyfile.json'

async function sendQuery() {
  // Creates a client
  const client = new BigQuery({
    keyFilename
  })
  const query = `
    SELECT table_name
    FROM lens-public-data.polygon.INFORMATION_SCHEMA.TABLES
  `

  const options = {
    query: query,
    location: 'US',
  }

  const [rows] = await client.query(options);
  console.log('Rows:', rows);

  fs.writeFileSync('./lens-tables.json', JSON.stringify(rows))
  
}
sendQuery();