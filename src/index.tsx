import { useEffect, useRef, useState } from "react";

export function useSmoothCount(target: number, duration: number, curve?: number[]): number {
    const bezier = curve ?? [0, 0, 1, 1];
    const [cur, setCur] = useState(1);
    let progress = useRef(0);

    useEffect(() => {
        let timer: any = setInterval(() => {
            let t = progress.current;

            let d1y = t * bezier[1] + t * (bezier[1] + t * (bezier[3] - bezier[1]) - t * bezier[1]);
            let d2y =
                bezier[1] +
                t * (bezier[3] - bezier[1]) +
                t * (bezier[3] + t * (1 - bezier[3]) - (bezier[1] + t * (bezier[3] - bezier[1])));

            if (Math.abs(cur) >= Math.abs(target) || t >= 1) return clearInterval(timer);

            progress.current = t + 1 / (duration * 50);
            setCur((d1y + (d2y - d1y) * t) * target);
        }, 20);
    }, []);

    return Math.round(cur);
}
