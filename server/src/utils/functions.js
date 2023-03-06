export const splitAndJoin = (value) => value.split(',').join(' ')

export const getPublicID = (secureURL) => {
  const publicID = secureURL.match(/\/([^/]+)\/([^/]+)\.[^/.]+$/)
  return publicID[1] + '/' + publicID[2]
}
