/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npx wrangler dev src/index.js` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npx wrangler publish src/index.js --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  async fetch(request, env, ctx) {
    return fetch(
      "https://objectstorage.us-ashburn-1.oraclecloud.com/n/idnlbof7ef1t/b/100seconds/o/React%20in%20100%20Seconds%20%5BTn6-PIqc4UM%5D.webm"
    );
  },
};
