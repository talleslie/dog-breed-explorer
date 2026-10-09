export interface DogApiResponse<T> {
  message: T
  status: 'success' | 'error'
}

export type BreedList = Record<string, string[]>

export type ImageList = string[]

export type BreedListResponse = DogApiResponse<BreedList>

export type ImageListResponse = DogApiResponse<ImageList>

export interface Breed {
  name: string
  imageUrl: string
}
