import { MutableRefObject, useEffect, useRef } from "react";
/**
 * use-smooth-count
 * @param {ReactHTMLElement} ref - A ref to the element which the count will be displayed in
 * @param {number} target - The target (final) number you want to interpolate to
 * @param {number} duration - How long (in seconds) it takes to reach that number
 * @param {number[]} curve - An array of two points to create a cubic bezier curve (x1, y2, x2, y2)
 * @param {number} start - A designated number to start to count from (default 0)
 */

interface SmoothCountProps {
    ref: MutableRefObject<any>;
    target: number;
    duration: number;
    curve?: number[] | undefined;
    startAt?: number | undefined;
}

export function useSmoothCount({ ref, target, duration, curve, startAt }: SmoothCountProps): string {
    const bezier: number[] = curve ? curve : [0, 0, 1, 1];
    const start: number = startAt ?? 1;
    const decimals: number = target.toString().split(".")[1]?.length || 0;

    let cur = start;
    const progress = useRef(0);

    useEffect(() => {
        const timer: NodeJS.Timeout = setInterval(() => {
            let t = progress.current;

            const d1y = t * bezier[1] + t * (bezier[1] + t * (bezier[3] - bezier[1]) - t * bezier[1]);
            const d2y =
                bezier[1] +
                t * (bezier[3] - bezier[1]) +
                t * (bezier[3] + t * (1 - bezier[3]) - (bezier[1] + t * (bezier[3] - bezier[1])));

            if (Math.abs(cur) >= Math.abs(target) || t >= 1) {
                cur = target;
                ref.current.textContent = cur.toFixed(decimals);
                return clearInterval(timer);
            }

            progress.current = t + 1 / (duration * 50); // 50 is technically correct, although the actual time varies on different devices based on specs
            cur = start + (d1y + (d2y - d1y) * t) * (target - start);
            ref.current.textContent = cur.toFixed(decimals);
        }, 20);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return cur.toFixed(decimals);
}
