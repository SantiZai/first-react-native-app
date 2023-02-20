import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Tab, TabView, Text } from '@ui-kitten/components'
import Subways from './subways/Subways'
import Home from './Home'

const AppBar = () => {
	const [selectedIndex, setSelectedIndex] = React.useState(0)

	const shouldLoadComponent = (index: number) => index === selectedIndex

	return (
		<TabView
			selectedIndex={selectedIndex}
			shouldLoadComponent={shouldLoadComponent}
			onSelect={index => setSelectedIndex(index)}>
			<Tab title='HOME' style={{ paddingVertical: 10 }}>
				<Layout style={styles.tabContainer}>
					<Home />
				</Layout>
			</Tab>
			<Tab title='SUBWAYS' style={{ paddingVertical: 10 }}>
				<Layout style={styles.tabContainer}>
					<Subways />
				</Layout>
			</Tab>
			<Tab title='TRANSACTIONS' style={{ paddingVertical: 10 }}>
				<Layout style={styles.tabContainer}>
					<Text category='h5'>TRANSACTIONS</Text>
				</Layout>
			</Tab>
		</TabView>
	)
}

const styles = StyleSheet.create({
	tabContainer: {
		height: 64,
		alignItems: 'center',
		justifyContent: 'center',
	},
})

export default AppBar
