import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dtqkhpqtaqycucaugaaw.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0cWtocHF0YXF5Y3VjYXVnYWF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0NjcyNTYsImV4cCI6MjA1ODA0MzI1Nn0.xxE03zHeo9Aw0KXjoR2o48--B3poSU19KOZqGBY4dBY";

export const supabase = createClient(supabaseUrl, supabaseKey);
