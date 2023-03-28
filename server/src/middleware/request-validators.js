import { param } from 'express-validator'

// escape is not handled yet
export const sanatizeValidateStringReq = (reqParam) => [
    param(reqParam)
    .isString()
    .withMessage(`${reqParam} must be a string`)
    .notEmpty()
    .withMessage(`${reqParam} cannot be empty`)
    .trim()
    ]

export const validateParams = [sanatizeValidateStringReq('category'), sanatizeValidateStringReq('distinct')]
// export const sanatizeValidateIdReq = (requestId) => [param(requestId).isMongoId().withMessage('Invalid product ID')]
