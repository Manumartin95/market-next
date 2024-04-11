import { ValueObject } from '@/features/core/types/value-object'

export class Image extends ValueObject<string> {
  static create(value: string) {
    const regex = new RegExp(/"(https:\/\/[^"]+)"/)

    return new Image(value.match(regex) !== null ? value.match(regex)![1] : '')
  }
}
