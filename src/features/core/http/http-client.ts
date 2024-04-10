import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { singleton } from 'tsyringe'

@singleton()
export class HttpClient {
  readonly _httpInstance: AxiosInstance

  constructor() {
    this._httpInstance = axios.create({
      baseURL: 'https://api.escuelajs.co/api/v1/',
    })
  }

  get<Result>(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse<Result>> {
    return this._httpInstance.get(path, config)
  }
}
