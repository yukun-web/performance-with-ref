import {ComponentType} from "react";
import ReactDOM from "react-dom/client";
import {Profiler} from "../components/Profiler.tsx";

export const measureComponent = (Component: ComponentType) => new Promise(resolve => {
  ReactDOM.createRoot(document.createElement("root")).render(
    <Profiler Component={Component} onRender={resolve} />
  )
});

