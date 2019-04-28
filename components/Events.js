import styled from 'styled-components'
import EventCard from './EventCard'

const EventsWrapper = styled.div`
	a {
		color: ${({ theme }) => theme.colors.link};
		transition: all 0.1s;
	}

	a:hover {
		color: ${({ theme }) => theme.colors.primary};
	}
`

const Day = styled.div``

const DayTitle = styled.h2`
	padding-bottom: 5px;
	border-bottom: 5px solid ${({ theme }) => theme.colors.secondary};
`

export default () => (
	<EventsWrapper>
		<Day>
			<DayTitle>Monday</DayTitle>
			<EventCard
				imgSrc="/static/images/events/1 - Andre.jpg"
				imgAlt="André Sturesson"
				title="The research about the powerful effect of physical activity on mental health and performance"
				date="Monday, May 13, 2019"
				time="12:00 - 13:00"
				location="Nya Matsalen - Nymble"
				locationLink="https://goo.gl/maps/dro1gapMiHGxLkgD6"
			>
				<p>
					In this lecture André will share a lot of research on how
					physical activity influences stress, depression, anxiety,
					sleep, creativity, focus, and performance on IQ-tests, just
					to name a few. The latest research shows that we are made to
					move out bodies, it’s in our genes.
				</p>
				<p>
					He will bring up the following topics:
					<ul>
						<li>Why we are made for being active</li>
						<li>The effects on the brain</li>
						<li>The effects on our mental health </li>
						<li>The effects on the brain’s functions </li>
						<li>Advice to get started with exercising</li>
					</ul>
				</p>
				<p>
					As a professional lecturer, famous for his personal and
					engaging approach, André strives for presenting high quality
					lectures based on science. His lvoordade lectures are not
					just famous for being educating and inspiring, but also for
					their insights, humor and high quality. André also makes
					podcasts and is the creator of the popular podcast
					‘’Stresskolan’’ where he has interviewed some of the most
					famous doctors, psychologists and scientists about stress
					and how to handle it.
				</p>
				<p>
					This lecture will be held in Swedish. Lunch is provided for
					the first 70 to attend.
				</p>
				<a href="https://forms.gle/JhC7FYHmT2KUmG827">
					Link to Register
				</a>
			</EventCard>
		</Day>
	</EventsWrapper>
)
