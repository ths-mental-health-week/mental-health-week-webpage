import styled from 'styled-components'
import Head from 'next/head'
import Container from '../components/styles/Container'
import Header from '../components/styles/Header'

const Content = styled.main`
	background-color: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.secondary};
	margin-bottom: 100px;
`

const Introduction = styled.div`
	margin-top: 60px;
	text-align: center;

	h2 {
		font-size: 30px;
		text-align: center;
	}
`

export default () => (
	<>
		<Head>
			<title key="title">Events | Mental Health Week</title>
		</Head>
		<Header
			title="Mental Health Week"
			secondaryTitle="Your mental health matters"
		/>
		<Content>
			<Container>
				<Introduction>
					<h2>Event Schedule</h2>
					The events will be announced soon!
				</Introduction>
				{/* <Events /> */}
			</Container>
		</Content>
	</>
)
