import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: 'd87h5ewi', // <--- Find this in sanity.io/manage
  dataset: 'production',        // <--- Or whichever dataset you're using
  apiVersion: '2025-07-15',     // <--- Use today's date or the date from your Vision tool
  useCdn: true,                 // `false` if you want to ensure fresh data
});