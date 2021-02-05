import { supabaseClient } from "./supabase_client.js";

function fetchRecentTransaction() {
  supabaseClient.from("latest_transactions").select().order("tx_id");
  return;
}
