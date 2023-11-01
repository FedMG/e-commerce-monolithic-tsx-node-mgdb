export const generateRandomNumber = ({
  minRange = 1,
  maxRange = 10
}: {
  maxRange?: number
  minRange?: number
}) => {
  const DEFAULT_REST = 1
  return Math.floor(Math.random() * (maxRange - minRange + DEFAULT_REST)) + minRange
}
