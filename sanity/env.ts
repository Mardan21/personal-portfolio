export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-06-28'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'esoji1nf',
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const useCdn = false

export const baseUrl = assertValue(
  process.env.NEXT_PUBLIC_BASE_URL || 'https://localhost:3000',
  'Missing environment variable: NEXT_PUBLIC_BASE_URL'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    console.log(v)
    throw new Error(errorMessage)
  }

  return v
}
