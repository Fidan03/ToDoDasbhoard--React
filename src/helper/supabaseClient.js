import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://mgieguyiakhwvuxzqaxl.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1naWVndXlpYWtod3Z1eHpxYXhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2OTIwNDAsImV4cCI6MjA3MTI2ODA0MH0.1EAeyojMsWoh4cu_1iFzaQafE-5eMXmL6-QfU7MwjTA";

const supabase = createClient(supabaseURL, supabaseAnonKey);

export default supabase