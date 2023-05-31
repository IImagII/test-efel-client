import axios from 'axios'

import { getContentType } from '../utils/api.utils'

const API_URL = 'http://https://test-elfy.onrender.com/api'

export const axiosClassic = axios.create({
  baseURL: API_URL,
  headers: getContentType()
})
