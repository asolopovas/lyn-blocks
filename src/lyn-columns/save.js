/**
 * External dependencies
 */
import classnames from 'classnames'

/**
 * WordPress dependencies
 */
import {useInnerBlocksProps, useBlockProps} from '@wordpress/block-editor'

export default function save(settings) {
    const {isStackedOnMobile, verticalAlignment, columnCount} = settings.attributes

    const className = classnames({
        [`are-vertically-aligned-${verticalAlignment}`]: verticalAlignment,
        [`is-not-stacked-on-mobile`]: !isStackedOnMobile,
        [`grid grid-cols-${columnCount}`]: columnCount
    })

    const blockProps = useBlockProps.save({className})
    const innerBlocksProps = useInnerBlocksProps.save(blockProps)

    console.log({innerBlocksProps, blockProps, className})
    return <div {...innerBlocksProps} />
}
