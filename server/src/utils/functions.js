export const splitAndJoin = (value) => value.split(',').join(' ')

export const getPublicID = (secureURL) => {
  const publicID = secureURL.match(/\/([^/]+)\/([^/]+)\.[^/.]+$/)
  return publicID[1] + '/' + publicID[2]
}

export const isObject = (value) => typeof value === 'object'
export const isArray = (value) => Array.isArray(value)
