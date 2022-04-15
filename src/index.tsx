import { useEffect, useRef, useState } from "react";

/**
 * use-smooth-count
 * @param {number} target - The target (final) number you want to interpolate to
 * @param {number} duration - How long (in seconds) it takes to reach that number
 * @param {Object} options - The employee who is responsible for the project.
 * @param {number[]} options.curve - An array of two points to create a cubic bezier curve (x1, y2, x2, y2)
 * @param {number} options.start - A designated number to start to count from (default 0)
 */
interface SmoothCountOptions {
    curve?: number[];
    start?: number;
}

export function useSmoothCount(target: number, duration: number, options?: SmoothCountOptions): number {
    let bezier = [0, 0, 1, 1];
    let start = 1;

    options && options.curve ? (bezier = options.curve) : null;
    options && options.start ? (start = options.start) : null;

    const [cur, setCur] = useState(start);
    let progress = useRef(0);

    console.time();

    useEffect(() => {
        let timer: any = setInterval(() => {
            let t = progress.current;

            let d1y = t * bezier[1] + t * (bezier[1] + t * (bezier[3] - bezier[1]) - t * bezier[1]);
            let d2y =
                bezier[1] +
                t * (bezier[3] - bezier[1]) +
                t * (bezier[3] + t * (1 - bezier[3]) - (bezier[1] + t * (bezier[3] - bezier[1])));

            if (Math.abs(cur) >= Math.abs(target) || t >= 1) {
                console.timeEnd();
                setCur(target);
                return clearInterval(timer);
            }

            progress.current = t + 1 / (duration * 50); // 50 is technically correct, although the actual time varies on different devices based on specs
            setCur(start + (d1y + (d2y - d1y) * t) * (target - start));
        }, 20);
    }, []);

    return Math.round(cur);
}
