import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

export interface Service {
  id: string
  name: string
  nameBn: string
  description?: string
  price?: number
  duration?: string
  category: string
  image?: string
  featured: boolean
}

export async function getServices(): Promise<Service[]> {
  const databaseId = process.env.NOTION_DATABASE_ID!

  const response = await (notion.databases as any).query({
    database_id: databaseId,
    filter: {
      property: 'Type',
      select: {
        equals: 'Service',
      },
    },
  })

  return response.results.map((page: any) => {
    const properties = page.properties
    return {
      id: page.id,
      name: properties.Name?.title[0]?.plain_text || '',
      nameBn: properties.NameBN?.rich_text[0]?.plain_text || '',
      description: properties.Description?.rich_text[0]?.plain_text || '',
      price: properties.Price?.number || 0,
      duration: properties.Duration?.rich_text[0]?.plain_text || '',
      category: properties.Category?.select?.name || 'General',
      image: properties.Image?.url || '',
      featured: properties.Featured?.checkbox || false,
    }
  })
}

export async function getBarbers() {
  const databaseId = process.env.NOTION_DATABASE_ID!

  const response = await (notion.databases as any).query({
    database_id: databaseId,
    filter: {
      property: 'Type',
      select: {
        equals: 'Barber',
      },
    },
  })

  return response.results.map((page: any) => {
    const properties = page.properties
    return {
      id: page.id,
      name: properties.Name?.title[0]?.plain_text || '',
      specialty: properties.Specialty?.rich_text[0]?.plain_text || '',
      experience: properties.Experience?.rich_text[0]?.plain_text || '',
      image: properties.Image?.url || '',
      rating: properties.Rating?.number || 5,
    }
  })
}

export async function getGalleryImages() {
  const databaseId = process.env.NOTION_DATABASE_ID!

  const response = await (notion.databases as any).query({
    database_id: databaseId,
    filter: {
      property: 'Type',
      select: {
        equals: 'Gallery',
      },
    },
  })

  return response.results.map((page: any) => {
    const properties = page.properties
    return {
      id: page.id,
      title: properties.Title?.title[0]?.plain_text || '',
      beforeImage: properties.BeforeImage?.url || '',
      afterImage: properties.AfterImage?.url || '',
      description: properties.Description?.rich_text[0]?.plain_text || '',
    }
  })
}

export async function getSalonInfo() {
  const databaseId = process.env.NOTION_DATABASE_ID!

  const response = await (notion.databases as any).query({
    database_id: databaseId,
    filter: {
      property: 'Type',
      select: {
        equals: 'SalonInfo',
      },
    },
  })

  if (response.results.length === 0) {
    return null
  }

  const properties = response.results[0].properties
  return {
    name: properties.Name?.title[0]?.plain_text || 'Masud Khan Men\'s Salon',
    phone: properties.Phone?.rich_text[0]?.plain_text || '01304-603705',
    whatsapp: properties.WhatsApp?.rich_text[0]?.plain_text || '01304-603705',
    facebook: properties.Facebook?.url || '',
    messenger: properties.Messenger?.url || '',
    address: properties.Address?.rich_text[0]?.plain_text || '',
    openingHours: properties.OpeningHours?.rich_text[0]?.plain_text || 'Sat - Fri: 10 AM - 10 PM',
  }
}
