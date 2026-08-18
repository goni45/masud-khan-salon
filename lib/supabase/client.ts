// Helper to create Supabase client safely on client side only
let _supabaseClient: any = null

export async function getSupabaseClient() {
  if (typeof window === 'undefined') {
    return null
  }

  if (!_supabaseClient) {
    try {
      const { createClient } = await import('@supabase/supabase-js')
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL
      const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

      if (!url || !key) {
        console.warn('Supabase credentials not configured')
        return null
      }

      _supabaseClient = createClient(url, key)
    } catch (error) {
      console.error('Failed to initialize Supabase client:', error)
      return null
    }
  }

  return _supabaseClient
}
