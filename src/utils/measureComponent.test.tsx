import {describe, expect, test} from "vitest";
import {measureComponent} from "./measureComponent.tsx";
import {waitSync} from "./waitSync.ts";

/**
 * @vitest-environment jsdom
 */
describe("measureComponent", () => {
  test("渡したコンポーネントを 1000 回レンダリングするのに必要な時間を計測できる", async () => {
    const duration = await measureComponent(() => {
      waitSync(1)
      return <div>1ms Component</div>
    });

    expect(duration).toBeGreaterThan(1000);
  });
});