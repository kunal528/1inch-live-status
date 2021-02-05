import { createClient } from "@supabase/supabase-js";
export const APIKEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxMjIzMDc5MiwiZXhwIjoxOTI3ODA2NzkyfQ.N9aWI_jim3_ND9veSLcy4xDpyUCNk6En3Qh6OqbvlRU";
export const supabaseClient = createClient("https://zdzpscendscphisyveuv.supabase.co", APIKEY);


