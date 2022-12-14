wp.hooks.removeFilter('editor.BlockListBlock', 'core/editor/layout/with-layout-styles')
import {registerBlockType} from '@wordpress/blocks'
/**
 * WordPress dependencies
 */
import {column as icon} from '@wordpress/icons'

export function getTailwindAlignClass(type) {
    if (type === 'top') return 'start'
    if (type === 'bottom') return 'end'
    if (type === 'center') return 'center'
}

/**
 * Internal dependencies
 */
import edit from './edit'
import metadata from './block.json'
import save from './save'

const {name} = metadata

export {metadata, name}

registerBlockType(name, {
    icon,
    edit,
    save, // Object shorthand property - same as writing: save: save,
})
