import Head from 'next/head'
import { fontNames } from '../utils/theme'

const Meta = () => (
	<Head>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta charSet="utf-8" />
		<link rel="shortcut icon" href="/static/favicon.png" />
		<title key="title">THS Mental Health Week</title>
		<link
			href={`https://fonts.googleapis.com/css?family=${
				fontNames.text
			}:300|${fontNames.title}:600,800`}
			rel="stylesheet"
		/>
	</Head>
)

export default Meta
