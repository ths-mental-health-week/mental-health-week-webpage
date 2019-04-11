import styled from 'styled-components'
import EventCard from './EventCard'

const EventsWrapper = styled.div``

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
				imgSrc="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2Fb8649f28-6139-11e3-916e-00144feabdc0?source=next&fit=scale-down&width=700"
				imgAlt="Profile image of Malala"
				title="Lunch Lecture with Anders"
				date="Monday, May 13, 2019"
				time="12:00 - 13:00"
				location="Nya Matsalen - Nymble"
				locationLink="/contact"
			>
				<p>
					The most important variable for mental health: the quality
					of your interpersonal relationships. Anton Hallin is a
					student at KTH and holds a bachelor in cognitive
					neurosciense from the Unisersity of Skövde from his previous
					education where he studied positive psychology. In this
					lunch lecture he will reveal what unites the most happy
					people in the world, how relationship quality can be
					enhanced by allowing for vulnerability and how you
					compliment your friends in the right way (hint, there is a
					wrong way).
				</p>
				<a href="http://google.com">Link to Register</a>
			</EventCard>
			<EventCard
				imgSrc="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2Fb8649f28-6139-11e3-916e-00144feabdc0?source=next&fit=scale-down&width=700"
				imgAlt="Profile image of Malala"
				title="Lunch Lecture with Anders"
				date="Monday, May 13, 2019"
				time="12:00 - 13:00"
				location="Nya Matsalen - Nymble"
				locationLink="/contact"
			>
				<p>
					The most important variable for mental health: the quality
					of your interpersonal relationships. Anton Hallin is a
					student at KTH and holds a bachelor in cognitive
					neurosciense from the Unisersity of Skövde from his previous
					education where he studied positive psychology. In this
					lunch lecture he will reveal what unites the most happy
					people in the world, how relationship quality can be
					enhanced by allowing for vulnerability and how you
					compliment your friends in the right way (hint, there is a
					wrong way).
				</p>
				<a href="http://google.com">Link to Register</a>
			</EventCard>
		</Day>
		<Day>
			<DayTitle>Tuesday</DayTitle>

			<EventCard
				imgSrc="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2Fb8649f28-6139-11e3-916e-00144feabdc0?source=next&fit=scale-down&width=700"
				imgAlt="Profile image of Malala"
				title="Lunch Lecture with Anders"
				date="Monday, May 13, 2019"
				time="12:00 - 13:00"
				location="Nya Matsalen - Nymble"
				locationLink="/contact"
			>
				<p>
					The most important variable for mental health: the quality
					of your interpersonal relationships. Anton Hallin is a
					student at KTH and holds a bachelor in cognitive
					neurosciense from the Unisersity of Skövde from his previous
					education where he studied positive psychology. In this
					lunch lecture he will reveal what unites the most happy
					people in the world, how relationship quality can be
					enhanced by allowing for vulnerability and how you
					compliment your friends in the right way (hint, there is a
					wrong way).
				</p>
				<a href="http://google.com">Link to Register</a>
			</EventCard>
		</Day>
	</EventsWrapper>
)
