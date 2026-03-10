import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mermaid from 'astro-mermaid';


export default defineConfig({
  integrations: [tailwind(), mermaid()],
  redirects: {
    "/maken": "/doen",
    "/beleven": "/delen",
  },


});