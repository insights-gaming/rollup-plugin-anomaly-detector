import { createFilter } from '@rollup/pluginutils';

export default function anomalyDetector({
    include,
    exclude,
}) {
    const filter = createFilter(include, exclude);
    return {
        name: 'rollup-plugin-anomaly-detector',
        resolveId(id, importer) {
            if (
                importer &&
                !id.startsWith('.') &&
                filter(id) &&
                id.match(/^(@[\w-]+\/)?[\w]+\//)
            ) {
                throw new Error(`non-root package import detected: ${id} imported in ${importer}`);
            }
        },
    };
}
