import { useStaggeringDelay } from '@/hooks'
import { BaseComponentProps } from '@/schemas'

type StaggeringWrapperProps = Pick<BaseComponentProps, 'children'> & { time: number }

export const StaggeringWrapper: React.FC<StaggeringWrapperProps> = ({ children, time }) => {
  const isLoading = useStaggeringDelay({ time })
  return isLoading ? null : <>{children}</>
}
