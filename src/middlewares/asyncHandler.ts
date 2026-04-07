import { RequestHandler } from "express"

export function asyncHandler(fn: RequestHandler): RequestHandler {
    return function (req, resp, next) {
        return Promise.resolve(fn(req, resp, next)).catch(next)
    }
}


// Lets do 
// 1. Structured logging (production-grade)
// 2. Rate limiting + security (Helmet, CORS, etc.)