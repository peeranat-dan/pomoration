import { createClient } from '@supabase/supabase-js';

import { env } from '@/utils/config';

import type { Database } from './database.types';

const SUPABASE_URL = env.supabase.url;
const SUPABASE_ANON_KEY = env.supabase.anonKey;

const client = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);

export { client as supabaseClient };
