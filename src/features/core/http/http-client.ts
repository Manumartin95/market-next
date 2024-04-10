import axios, { AxiosInstance } from 'axios'

export class HttpClient {
  readonly _httpInstance: AxiosInstance

  constructor() {
    this._httpInstance = axios.create({
      baseURL: '',
    })
  }

  get<Param, Result>(url: string): Promise<Result> {
    return this._httpInstance.get(url, {})
  }
}
