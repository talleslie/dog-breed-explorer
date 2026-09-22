import axios from 'axios'
import type { BreedListResponse, DogApiResponse, ImageListResponse } from '@/types/dog'

const BASE_URL = 'https://dog.ceo/api'

export const getAllBreeds = async (): Promise<BreedListResponse> => {
  const response = await axios.get<BreedListResponse>(`${BASE_URL}/breeds/list/all`)
  return response.data
}

export const getBreedImages = async (breed: string, count: number): Promise<ImageListResponse> => {
  const response = await axios.get<ImageListResponse>(
    `${BASE_URL}/breed/${breed}/images/random/${count}`,
  )
  return response.data
}

export const getRandomImage = async (breed: string): Promise<DogApiResponse<string>> => {
  const response = await axios.get<DogApiResponse<string>>(
    `${BASE_URL}/breed/${breed}/images/random`,
  )
  return response.data
}
