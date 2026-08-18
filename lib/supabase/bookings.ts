import { getSupabaseClient } from './client'

export interface Booking {
  id?: string
  customer_name: string
  customer_phone: string
  service: string
  barber?: string
  booking_date: string
  booking_time: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  notes?: string
  created_at?: string
}

export async function createBooking(booking: Booking) {
  try {
    const supabase = await getSupabaseClient()
    if (!supabase) {
      console.error('Supabase not configured')
      return null
    }

    const { data, error } = await supabase
      .from('bookings')
      .insert([booking])
      .select()
      .single()

    if (error) {
      console.error('Booking error:', error)
      throw error
    }
    return data
  } catch (error) {
    console.error('Failed to create booking:', error)
    throw error
  }
}

export async function getBookings() {
  try {
    const supabase = await getSupabaseClient()
    if (!supabase) return []

    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return data || []
  } catch (error) {
    console.error('Failed to fetch bookings:', error)
    return []
  }
}

export async function updateBookingStatus(id: string, status: Booking['status']) {
  try {
    const supabase = await getSupabaseClient()
    if (!supabase) return null

    const { data, error } = await supabase
      .from('bookings')
      .update({ status })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  } catch (error) {
    console.error('Failed to update booking:', error)
    return null
  }
}
