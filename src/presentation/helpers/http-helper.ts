import { HttoResponse } from '../protocols/http'

export const badRequest = (error: Error): HttoResponse => ({
  statusCode: 400,
  body: error
})
