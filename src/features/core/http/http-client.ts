import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { singleton } from 'tsyringe'

@singleton()
export class HttpClient {
  readonly _httpInstance: AxiosInstance

  constructor() {
    this._httpInstance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    })
  }

  get<Result>(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse<Result>> {
    return this._httpInstance.get(path, config)
  }
}
