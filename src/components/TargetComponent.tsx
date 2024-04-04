import {waitSync} from "../utils/waitSync.ts";

export const TargetComponent = () => {
  waitSync(1)

  return (
    <div>TargetComponent</div>
  )
}