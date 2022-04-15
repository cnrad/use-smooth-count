import { useEffect, useRef, useState } from "react";

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
