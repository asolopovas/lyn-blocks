/**
 * External dependencies
 */
import classnames from 'classnames'
import "./style.scss"

/**
 * WordPress dependencies
 */
import {useInnerBlocksProps, useBlockProps} from '@wordpress/block-editor'
import { getTailwindAlignClass } from '.'


export default function save({attributes}) {
    const {verticalAlignment, width} = attributes


	const wrapperClasses = classnames({
        [`items-${getTailwindAlignClass(verticalAlignment)}`]: verticalAlignment,
    })

    let style

    if (width && /\d/.test(width)) {
        // Numbers are handled for backward compatibility as they can be still provided with templates.
        let flexBasis = Number.isFinite(width) ? width + '%' : width
        // In some cases we need to round the width to a shorter float.
        if (!Number.isFinite(width) && width?.endsWith('%')) {
            const multiplier = 1000000000000
            // Shrink the number back to a reasonable float.
            flexBasis =
                Math.round(Number.parseFloat(width) * multiplier) /
                multiplier +
                '%'
        }
        style = {flexBasis}
    }

    const blockProps = useBlockProps.save({
        className: wrapperClasses,
    })
    const innerBlocksProps = useInnerBlocksProps.save(blockProps)

    return <div {...innerBlocksProps} />
}
