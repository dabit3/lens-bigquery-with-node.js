import { BigQuery } from '@google-cloud/bigquery'
import fs from 'fs'
const keyFilename = './keyfile.json'

async function sendQuery() {
  const client = new BigQuery({
    keyFilename
  })
  const query = `
    SELECT * 
    FROM lens-public-data.polygon.public_profile_stats
    where profile_id = '0x28a2'
  `

  const options = {
    query: query,
    location: 'US',
  }

  const [rows] = await client.query(options);
  console.log('Rows:', rows);

  fs.writeFileSync('./profile-stats.json', JSON.stringify(rows))
  
}
sendQuery();