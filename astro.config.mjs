import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';

import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  integrations: [partytown()],
  output: 'server',
  adapter: vercel()
});