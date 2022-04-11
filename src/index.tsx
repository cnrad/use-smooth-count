import { useEffect, useRef, useState } from "react";

export function useSmoothCount(num: number, duration: number, bezier: number[]) {
    const [cur, setCur] = useState(1);
    let progress = useRef(0);

    useEffect(() => {
        console.time();

        let timer: any = setInterval(() => {
            let t = progress.current;

            // let c1y = t * bezier[1];
            // let c2y = bezier[3] + t * (1 - bezier[3]);
            // let s3y = bezier[1] + t * (bezier[3] - bezier[1]);
            // let d1yO = c1y + t * (s3y - c1y);
            // let d2yO = s3y + t * (c2y - s3y);

            let d1y = t * bezier[1] + t * (bezier[1] + t * (bezier[3] - bezier[1]) - t * bezier[1]);
            let d2y =
                bezier[1] +
                t * (bezier[3] - bezier[1]) +
                t * (bezier[3] + t * (1 - bezier[3]) - (bezier[1] + t * (bezier[3] - bezier[1])));

            if (cur >= num || t >= 1) console.timeEnd();
            if (Math.abs(cur) >= Math.abs(num) || t >= 1) return clearInterval(timer);

            console.log(t, cur, [d1y, d2y]);

            progress.current = t + 1 / (duration * 50);
            setCur((d1y + (d2y - d1y) * t) * num);
        }, 20);
    }, []);

    return Math.round(cur);
}
