import {Profiler} from "./components/Profiler.tsx";
import {TargetComponent} from "./components/TargetComponent.tsx";
import {useState} from "react";

function App() {
  const [duration, setDuration] = useState<number | null>(null)

  return (
    <>
      <div>
        {duration && <p>{duration}ms</p>}
      </div>
      <Profiler
        Component={TargetComponent}
        onRender={setDuration}
      />
    </>
  )

}

export default App
