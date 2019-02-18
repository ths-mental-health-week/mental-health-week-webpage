import { ThemeProvider } from 'styled-components'
import Meta from './Meta'
// import Header from './Header'

const theme = {
	colors: {
		white: '#fff',
		primary: '#67a2ce',
		secondary: '#edc98a'
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
