export interface AnomalyDetectorOptions {
    include: string | RegExp | Array<string | RegExp>;
    exclude: string | RegExp | Array<string | RegExp>;
}

export default function anomalyDetector(options: AnomalyDetectorOptions);
