import { MutableRefObject, useRef } from "react";

/**
 * use-smooth-count
 * @param {ReactHTMLElement} ref - A ref to the element which the count will be displayed in
 * @param {number} target - The target (final) number you want to interpolate to
 * @param {number} duration - How long (in seconds) it takes to reach that number
 * @param {number[]} curve - An array of two points to create a cubic bezier curve (x1, y2, x2, y2)
 * @param {number} startAt - A designated number to start to count from (default 0)
 * @param {number} preventStart - If true, only start the counter when .start() is called
 */

interface SmoothCountProps {
    ref: MutableRefObject<any>;
    target: number;
    duration: number;
    curve?: number[];
    startAt?: number;
    preventStart?: boolean;
}

export function useSmoothCount({
    ref,
    target,
    duration,
    curve,
    startAt,
    preventStart
}: SmoothCountProps): Record<string, any> {
    const bezier: number[] = curve ? curve : [0, 0, 1, 1];
    const startsAt: number = startAt ?? 1;
    const decimals: number = target.toString().split(".")[1]?.length || 0;

    let cur = startsAt;
    const progress = useRef(0);
    let timer: NodeJS.Timeout;

    !preventStart && start(); // start on first render if preventStart is not provided

    function start() {
        timer = setInterval(() => {
            if (ref.current === null) return;
            let t = progress.current;

            const d1y = t * bezier[1] + t * (bezier[1] + t * (bezier[3] - bezier[1]) - t * bezier[1]);
            const d2y =
                bezier[1] +
                t * (bezier[3] - bezier[1]) +
                t * (bezier[3] + t * (1 - bezier[3]) - (bezier[1] + t * (bezier[3] - bezier[1])));

            if (Math.abs(cur) >= Math.abs(target) || t >= 1) {
                cur = target;
                ref.current.textContent = cur.toFixed(decimals);
                return end();
            }

            progress.current = t + 1 / (duration * 50); // 50 is technically correct, although the actual time varies on different devices based on specs
            cur = startsAt + (d1y + (d2y - d1y) * t) * (target - startsAt);
            ref.current.textContent = cur.toFixed(decimals);
        }, 20);
    }

    function end() {
        clearInterval(timer);
    }

    return {
        current: cur.toFixed(decimals),
        start: start,
        end: end
    };
}
