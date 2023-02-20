import React from 'react'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, Layout } from '@ui-kitten/components'
import Constants from 'expo-constants'
import Main from './src/Main'

export default function App() {
	return (
		<ApplicationProvider {...eva} theme={eva.light}>
			<Layout style={{ marginTop: Constants.statusBarHeight }}>
				<Main />
			</Layout>
		</ApplicationProvider>
	)
}
