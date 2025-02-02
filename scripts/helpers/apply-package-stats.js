const GZIP_SIZE_REGEX =
    /(?<commentStart><!-- AUTOGENERATED START package-gzip-size -->).+?(?<commentEnd><!-- AUTOGENERATED END -->)/
const COMPOSITION_REGEX =
    /(?<commentStart><!-- AUTOGENERATED START package-composition -->).+?(?<commentEnd><!-- AUTOGENERATED END -->)/

export function applyPackageStats(packageStats, text) {
    const gzipSize = `${(packageStats.gzip / 1024).toFixed(1)} kB`
    const totalCompositionSize = packageStats.dependencySizes.reduce(
        (sum, current) => sum + current.approximateSize,
        0
    )
    const composition = packageStats.dependencySizes
        .map((dependency) => {
            const name = dependency.name === 'tailwind-merge' ? 'self' : dependency.name
            const percentageSize = (100 * dependency.approximateSize) / totalCompositionSize

            return `${percentageSize.toFixed(1)}% ${name}`
        })
        .join(', ')

    const hasPartsToUpdate = GZIP_SIZE_REGEX.test(text) && COMPOSITION_REGEX.test(text)

    const updatedText = text
        .replace(GZIP_SIZE_REGEX, `$<commentStart>${gzipSize}$<commentEnd>`)
        .replace(COMPOSITION_REGEX, `$<commentStart>${composition}$<commentEnd>`)

    return {
        gzipSize,
        composition,
        hasPartsToUpdate,
        updatedText,
    }
}
