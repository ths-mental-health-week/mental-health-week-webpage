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
		<Day>
			<DayTitle>Tuesday</DayTitle>
			<EventCard
				imgSrc="/static/images/events/2 - Caroline Hedler.jpg"
				imgAlt="Caroline Hedler"
				// imgObjectPosition="0 -30px"
				title="How to manage student stress and anxiety - the most common stress-related problems from the life of 100+ students."
				date="Tuesday, May 14, 2019"
				time="12:00 - 13:00"
				location="TBA"
			>
				<p>
					University can be a challenging time even for the most
					relaxed students. For many it’s the first time living away
					from home, managing your own time and taking care of
					yourself. This lecture covers the most common causes of
					student stress and different ways to overcome these. Learn
					how to cope with stress, procrastination, lack of motivation
					and focus, worries about the future and how to become a
					highly productive student.
				</p>
				<p>
					Caroline Hedler works as a student coach at the university
					of Edinburgh where her daily job is to coach students to
					reach their personal and academic goals.
				</p>
				<p>
					This lecture will be held in English. Lunch is provided for
					the first 90 to attend.
				</p>

				<a href="https://forms.gle/FWYWeKZQ2Rum9vbP7">
					Link to Register
				</a>
			</EventCard>
		</Day>
		<Day>
			<DayTitle>Thursday</DayTitle>
			<EventCard
				imgSrc="/static/images/events/4 - Anton Hallin.jpg"
				imgAlt="Anton Hallin"
				// imgObjectPosition="0 -30px"
				title="The most important variable for mental health: the quality of your interpersonal relationships"
				date="Thursday, May 16, 2019"
				time="12:00 - 13:00"
				location="TBA"
			>
				<p>
					Anton Hallin is a student at KTH and holds a bachelor in
					cognitive neurosciense from the Unisersity of Skövde from
					his previous education where he studied positive psychology.
					In this lunch lecture he will reveal what unites the most
					happy people in the world, how relationship quality can be
					enhanced by allowing for vulnerability and how you
					compliment your friends in the right way (hint, there is a
					wrong way).
				</p>

				<p>
					This lecture will be held in English. Lunch is provided for
					the first 90 to attend.
				</p>

				<a href="https://forms.gle/z4JUoSkpQiMuNTCk6">
					Link to Register
				</a>
			</EventCard>
		</Day>
		<Day>
			<DayTitle>Friday</DayTitle>
			<EventCard
				imgSrc="/static/images/events/5 - Anders Hansen.jpg"
				imgAlt="Anders Hansen"
				imgObjectPosition="0 -30px"
				title="Improve the capacity of your brain"
				date="Friday, May 17, 2019"
				time="09:00 - 10:00"
				location="E1"
				locationLink="https://goo.gl/maps/AZNdwBhRSq87fXtYA"
			>
				<p>
					Do you want to get more stress resistant, feel better,
					improve your memory and get more creative? Then join this
					lecture with Anders Hansen. He is a chief psychiatrist and
					will come to KTH on the 17th of May to hold his famous
					lecture on how exercising is directly related to the
					functioning of the brain and your mental health. Anders is
					the author of the best selling books &#34;Hjärnstark&#34;
					and &#34;Skärmhjärnan&#34; and for this breakfast event he
					will talk about how to get a mental upgrade!
				</p>
				<p>
					See Anders talk about how exercising makes the brain strong{' '}
					<a href="https://www.svt.se/nyheter/svtforum/motion-gor-hjarnan-stark-1?fbclid=IwAR3LtpB8XjE29BJgobUOPASPH1OjLKoEOCL9OrBLtBwOtk0YqOsB7bLbXrc">
						here
					</a>
					.
				</p>

				<p>
					This lecture will be held in English. Breakfast is provided
					for the first 200 attending.
				</p>
				<p>Sponsored by Erasmus and Crebel consulting</p>

				<a href="https://forms.gle/3J9m81K43tkK7ca89">
					Link to Register
				</a>
			</EventCard>
		</Day>
	</EventsWrapper>
)
