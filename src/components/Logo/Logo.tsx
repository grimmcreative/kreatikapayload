import Image from "next/image"

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <>
      <Image 
        src="/ui/logo-light.svg" 
        alt="KREATIKA" 
        width={200} 
        height={50}
        className="max-w-[9.375rem] invert dark:invert-0 w-full"
        decoding="async"
        loading={loading}
        fetchPriority={priority} 
      />
    </>

  )
}
