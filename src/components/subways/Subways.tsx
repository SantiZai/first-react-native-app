import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { Text } from '@ui-kitten/components'
import { bringSubways } from '../../services/bringSubways'
import { ISubway } from '../../interfaces'
import Subway from './Subway'

const Subways = () => {
	const [subways, setSubways] = useState([] as ISubway[])

	useEffect(() => {
		bringSubways().then(res => setSubways(res))
	}, [])

	return (
        <FlatList
            data={subways}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: subway }) => (
                <Subway { ...subway } />
            )}
        >

        </FlatList>
    )
}

export default Subways
