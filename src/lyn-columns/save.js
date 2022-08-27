/**
 * External dependencies
 */
import classnames from 'classnames'

/**
 * WordPress dependencies
 */
import {useInnerBlocksProps, useBlockProps} from '@wordpress/block-editor'

export default function save(settings) {
    const {isStackedOnMobile, verticalAlignment, gridCols, gridGap} = settings.attributes

    const className = classnames({
        [`are-vertically-aligned-${verticalAlignment}`]: verticalAlignment,
        [`is-not-stacked-on-mobile`]: !isStackedOnMobile,
        ['grid'] : true,
        [`gap-${gridGap}`]: gridGap,
        [`grid-cols-${gridCols}`]: gridCols
    })

    const blockProps = useBlockProps.save({className})
    const innerBlocksProps = useInnerBlocksProps.save(blockProps)

    console.log({innerBlocksProps, attributes: settings.attributes})
    return <div {...innerBlocksProps} />
}
