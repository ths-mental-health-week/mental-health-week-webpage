import { ThemeProvider } from 'styled-components'
import Meta from './Meta'
import Footer from './Footer'
import Navbar from './Navbar'
// import Header from './Header'
import theme from '../utils/theme'

const Page = ({ children }) => (
	<ThemeProvider theme={theme}>
		<div>
			<Navbar />
			<Meta />
			{/* <Header /> */}
			<>{children}</>
			<Footer />
		</div>
	</ThemeProvider>
)

export default Page
