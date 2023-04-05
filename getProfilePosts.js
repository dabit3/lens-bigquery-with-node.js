import { BigQuery } from '@google-cloud/bigquery'
import fs from 'fs'
const keyFilename = './keyfile.json'

async function sendQuery() {
  const client = new BigQuery({
    keyFilename
  })
  const query = `
    SELECT * 
    FROM lens-public-data.polygon.public_profile_post
    where profile_id = '0x28a2'
    order by block_timestamp desc
  `

  const options = {
    query: query,
    location: 'US',
  }

  const [rows] = await client.query(options);
  console.log('Rows:', rows);

  fs.writeFileSync('./profile-posts.json', JSON.stringify(rows))
  
}
sendQuery();