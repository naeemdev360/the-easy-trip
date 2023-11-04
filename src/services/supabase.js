import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://pqzbqmjuehqgozefokfr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxemJxbWp1ZWhxZ296ZWZva2ZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIwMzI5MjcsImV4cCI6MjAwNzYwODkyN30.j3hwUKg_3NhMUIH_C6WsD1nsF343aFnKR696mjthtD0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
