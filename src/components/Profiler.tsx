import {ComponentType, useEffect, useRef} from "react";

type ProfilerProps = {
  Component: ComponentType
  onRender: (duration: number) => void
}

export const Profiler = ({Component, onRender}: ProfilerProps) => {
  const startTime = useRef(performance.now())

  useEffect(() => {
    const endTime = performance.now()
    onRender(endTime - startTime.current)
  }, [onRender])

  return (
    <div>
      {[...Array(1000)].map((_, index) => {
        return <Component key={index}/>
      })}
    </div>
  )
}