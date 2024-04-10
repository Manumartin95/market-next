import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { singleton } from 'tsyringe'

@singleton()
export class HttpClient {
  readonly _httpInstance: AxiosInstance

  constructor() {
    this._httpInstance = axios.create({
      baseURL: 'https://api.escuelajs.co/api/v1/',
    })
  }

  get<Result, Param = void>(url: string, param?: Param): Promise<AxiosResponse<Result>> {
    return this._httpInstance.get(url, {})
  }
}
