import { ThemeProvider } from 'styled-components'
import Meta from './Meta'
// import Header from './Header'

const theme = {
	colors: {
		white: '#fff',
		black: '#000',
		darkGrey: '#555',
		primary: '#F38D74',
		secondary: '#B63E28',
		background: '#F38D74',
		selection: '#ffc4b7'
	}
}

const Page = ({ children }) => (
	<ThemeProvider theme={theme}>
		<div>
			<Meta />
			{/* <Header /> */}
			<>{children}</>
		</div>
	</ThemeProvider>
)

export default Page
