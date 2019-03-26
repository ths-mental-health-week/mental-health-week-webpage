import styled from 'styled-components'
import Container from '../components/styles/Container'
import Header from '../components/styles/Header'
import SkewedLink from '../components/styles/SkewedLink'
import Divider from '../components/styles/Divider'
import TextImageRow from '../components/TextImageRow'

const Content = styled.main`
	background-color: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.secondary};
	margin-bottom: 100px;
`

const Introduction = styled.div`
	margin-top: 60px;

	h2 {
		text-align: center;
	}
`

export default () => (
	<>
		<Header
			title="THS Mental Health Week"
			secondaryTitle="Your mental health matters"
		/>
		<Content>
			<Container>
				<Introduction>
					<h2>What is Mental Health Week?</h2>
					<p>
						We believe that solutions happen when we start sharing
						what’s going on in our minds to friends, family and even
						strangers. Mental Health Week is the place where you can
						share your story of mental health challenges and learn
						without any fear or restriction. A series of lectures
						and activities on a different theme every day, where
						everyone is welcome whether you are seeking help or if
						you are curious about Mental Health issues.
					</p>
				</Introduction>
				<Divider />
				<TextImageRow
					imgSrc="/static/images/calendar.svg"
					imgAlt="Calendar icon"
					title="Upcoming events"
				>
					<p>
						A week full of lectures, activities and opportunities to
						connect. Choose your pick or come for all.
					</p>
					<SkewedLink href="/schedule" marginLeft>
						Event Schedule
					</SkewedLink>
				</TextImageRow>
				<TextImageRow
					imgSrc="/static/images/mental-health.svg"
					imgAlt=""
					title="Take care of yourself"
					inverse
				>
					<p>
						Make your mental health a priority. Whether you need
						help or if you are curious about learning more about how
						your mind works, Mental Health Week is here to give you
						the tools.
					</p>
				</TextImageRow>
			</Container>
		</Content>
	</>
)
