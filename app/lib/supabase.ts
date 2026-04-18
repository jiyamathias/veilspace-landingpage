import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://txisgjdshhxislonrcnf.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4aXNnamRzaGh4aXNsb25yY25mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxNjU2NDQsImV4cCI6MjA5MDc0MTY0NH0.3COTcu6XldRl6u7gCwhgiHrHRtp5yzd86IRQH_3ROCU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
