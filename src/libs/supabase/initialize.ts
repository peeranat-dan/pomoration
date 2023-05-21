import { createClient } from '@supabase/supabase-js';

import type { Database } from './database.types';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_URL_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const client = createClient<Database>(SUPABASE_URL, SUPABASE_URL_ANON_KEY);

export { client as supabaseClient };
