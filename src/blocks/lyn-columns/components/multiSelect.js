import {FormTokenField} from '@wordpress/components'
import {useState} from '@wordpress/element'

const continents = [
    // 'grid-cols-{1-6}'
    'grid-cols-1',
    'grid-cols-2',
    'grid-cols-3',
    'grid-cols-4',
    'grid-cols-5',
    'grid-cols-6',

]

const BlockMultiSelect = () => {
    const [selectedClasses, setSelectedClasses] = useState([])
    return (
        <FormTokenField
            value={selectedContinents}
            suggestions={continents}
            onChange={(tokens) => setSelectedContinents(tokens)}
        />
    )
}
export default BlockMultiSelect
