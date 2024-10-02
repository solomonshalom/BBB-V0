import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [partytown()],
  output: 'static',
  adapter: vercel()
});