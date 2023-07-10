import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
// import { apiVersion, dataset, projectId, useCdn, baseUrl } from '../env'

export const config = {
  apiVersion: '2023-06-28',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  useCdn: process.env.NODE_ENV === "production",
}

export const sanityClient = createClient(config)

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source);