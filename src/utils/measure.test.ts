import {describe, expect, it} from "vitest";
import {measure} from "./measure.ts";
import * as DateFns from "date-fns";
import dayjs from "dayjs";

describe("measure", () => {
  it("関数の実行にかかった時間を計測できる", () => {
    const fn = () => {
      for (let i = 0; i < 1000000; i++) {
        // do nothing
      }
    }

    const duration = measure(fn);

    expect(duration).toBeGreaterThan(0);
  });

  it("date-fns と dayjs で現在の時刻を HH:mm 形式で取得する操作のパフォーマンスを比較できる", () => {
    const dateFnsFn = () => {
      DateFns.format(new Date(), "HH:mm");
    }

    const dayjsFn = () => {
      dayjs().format("HH:mm");
    }

    const dateFnsDuration = measure(dateFnsFn);
    const dayjsDuration = measure(dayjsFn);

    // どうやら dayjs の方が高速らしい
    expect(dayjsDuration).toBeLessThan(dateFnsDuration);
  });
});