import { RequestPromise } from 'request-promise'

declare class Groups {
  get(query?: {}): RequestPromise

  create(data: {}): RequestPromise

  update(name: string, data: {}): RequestPromise

  delete(name: string): RequestPromise

  upsert(data: {}): RequestPromise
}

export { Groups }
