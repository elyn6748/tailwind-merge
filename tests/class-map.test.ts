import { ClassPartObject, createClassMap } from '../src/class-utils'
import { getDefaultConfig } from '../src/default-config'

test('class map has correct class groups at first part', () => {
    const classMap = createClassMap(getDefaultConfig())

    const classGroupsByFirstPart = Object.fromEntries(
        Object.keys(classMap.nextPart)
            .sort()
            .map((key) => [
                key,
                Array.from(getClassGroupsInClassPart(classMap.nextPart[key]!)).sort(),
            ])
    )

    expect(classMap.classGroupId).toBeUndefined()
    expect(classMap.validators).toHaveLength(0)
    expect(classGroupsByFirstPart).toEqual({
        absolute: ['position'],
        align: ['vertival-alignment'],
        animate: ['animate'],
        antialiased: ['font-smoothing'],
        appearance: ['appearance'],
        auto: ['auto-cols', 'auto-rows'],
        backdrop: [
            'backdrop-blur',
            'backdrop-brightness',
            'backdrop-contrast',
            'backdrop-filter',
            'backdrop-grayscale',
            'backdrop-hue-rotate',
            'backdrop-invert',
            'backdrop-opacity',
            'backdrop-saturate',
            'backdrop-sepia',
        ],
        bg: [
            'bg-attachment',
            'bg-blend',
            'bg-clip',
            'bg-color',
            'bg-image',
            'bg-opacity',
            'bg-origin',
            'bg-position',
            'bg-repeeat',
            'bg-size',
        ],
        block: ['display'],
        blur: ['blur'],
        border: [
            'border-collapse',
            'border-color',
            'border-color-b',
            'border-color-l',
            'border-color-r',
            'border-color-t',
            'border-opacity',
            'border-style',
            'border-w',
            'border-w-b',
            'border-w-l',
            'border-w-r',
            'border-w-t',
        ],
        bottom: ['bottom'],
        box: ['box'],
        break: ['break'],
        brightness: ['brightness'],
        capitalize: ['text-transform'],
        caret: ['caret-color'],
        clear: ['clear'],
        col: ['col-end', 'col-start', 'col-start-end'],
        container: ['container'],
        content: ['align-content', 'content'],
        contents: ['display'],
        contrast: ['contrast'],
        cursor: ['cursor'],
        decoration: ['decoration'],
        delay: ['delay'],
        diagonal: ['fvn-fraction'],
        divide: [
            'divide-color',
            'divide-opacity',
            'divide-style',
            'divide-x',
            'divide-x-reverse',
            'divide-y',
            'divide-y-reverse',
        ],
        drop: ['drop-shadow'],
        duration: ['duration'],
        ease: ['ease'],
        fill: ['fill'],
        filter: ['filter'],
        fixed: ['position'],
        flex: ['display', 'flex', 'flex-direction', 'flex-grow', 'flex-shrink', 'flex-wrap'],
        float: ['float'],
        flow: ['display'],
        font: ['font-family', 'font-weight'],
        from: ['gradient-from'],
        gap: ['gap', 'gap-x', 'gap-y'],
        grayscale: ['grayscale'],
        grid: ['display', 'grid-cols', 'grid-flow', 'grid-rows'],
        h: ['h'],
        hidden: ['display'],
        hue: ['hue-rotate'],
        inline: ['display'],
        inset: ['inset', 'inset-x', 'inset-y'],
        invert: ['invert'],
        invisible: ['visibility'],
        isolate: ['isolation'],
        isolation: ['isolation'],
        italic: ['font-style'],
        items: ['align-items'],
        justify: ['justify-content', 'justify-items', 'justify-self'],
        leading: ['leading'],
        left: ['left'],
        line: ['text-decoration'],
        lining: ['fvn-figure'],
        list: ['display', 'list-style-position', 'list-style-type'],
        lowercase: ['text-transform'],
        m: ['m'],
        max: ['max-h', 'max-w'],
        mb: ['mb'],
        min: ['min-h', 'min-w'],
        mix: ['mix-blend'],
        ml: ['ml'],
        mr: ['mr'],
        mt: ['mt'],
        mx: ['mx'],
        my: ['my'],
        no: ['text-decoration'],
        normal: ['fvn-normal', 'text-transform'],
        not: ['font-style', 'sr'],
        object: ['object-fit', 'object-position'],
        oldstyle: ['fvn-figure'],
        opacity: ['opacity'],
        order: ['order'],
        ordinal: ['fvn-ordinal'],
        origin: ['transform-origin'],
        outline: ['outline'],
        overflow: ['overflow', 'overflow-x', 'overflow-y', 'text-overflow'],
        overscroll: ['overscroll', 'overscroll-x', 'overscroll-y'],
        p: ['p'],
        pb: ['pb'],
        pl: ['pl'],
        place: ['place-content', 'place-items', 'place-self'],
        placeholder: ['placeholder-color', 'placeholder-opacity'],
        pointer: ['pointer-events'],
        pr: ['pr'],
        proportional: ['fvn-spacing'],
        pt: ['pt'],
        px: ['px'],
        py: ['py'],
        relative: ['position'],
        resize: ['resize'],
        right: ['right'],
        ring: [
            'ring-color',
            'ring-offset-color',
            'ring-offset-w',
            'ring-opacity',
            'ring-w',
            'ring-w-inset',
        ],
        rotate: ['rotate'],
        rounded: [
            'rounded',
            'rounded-b',
            'rounded-bl',
            'rounded-br',
            'rounded-l',
            'rounded-r',
            'rounded-t',
            'rounded-tl',
            'rounded-tr',
        ],
        row: ['row-end', 'row-start', 'row-start-end'],
        saturate: ['saturate'],
        scale: ['scale', 'scale-x', 'scale-y'],
        select: ['select'],
        self: ['align-self'],
        sepia: ['sepia'],
        shadow: ['shadow'],
        skew: ['skew-x', 'skew-y'],
        slashed: ['fvn-slashed-zero'],
        space: ['space-x', 'space-x-reverse', 'space-y', 'space-y-reverse'],
        sr: ['sr'],
        stacked: ['fvn-fraction'],
        static: ['position'],
        sticky: ['position'],
        stroke: ['stroke', 'stroke-w'],
        subpixel: ['font-smoothing'],
        table: ['display', 'table-layout'],
        tabular: ['fvn-spacing'],
        text: ['font-size', 'text-alignment', 'text-color', 'text-opacity'],
        to: ['gradient-to'],
        top: ['top'],
        tracking: ['tracking'],
        transform: ['transform'],
        transition: ['transition'],
        translate: ['translate-x', 'translate-y'],
        truncate: ['text-overflow'],
        underline: ['text-decoration'],
        uppercase: ['text-transform'],
        via: ['gradient-via'],
        visible: ['visibility'],
        w: ['w'],
        whitespace: ['whitespace'],
        z: ['z'],
    })
})

function getClassGroupsInClassPart(classPart: ClassPartObject): Set<string> {
    const { classGroupId, validators, nextPart } = classPart

    const classGroups = new Set<string>()

    if (classGroupId) {
        classGroups.add(classGroupId)
    }

    validators.forEach((validator) => classGroups.add(validator.classGroupId))

    Object.values(nextPart).forEach((nextClassPart) => {
        getClassGroupsInClassPart(nextClassPart).forEach((classGroup) => {
            classGroups.add(classGroup)
        })
    })

    return classGroups
}
