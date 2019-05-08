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
				imgSrc="/static/images/events/1 - Anna Gordh Humlesjo.jpg"
				imgAlt="Anna Gordh Humlesjö"
				title="Yoga with Anna Gordh Humlesjö - Theory and practice of yoga"
				date="Monday, May 13, 2019"
				time="08:30 - 09:30"
				location="KTH-Hallen"
				locationLink="https://goo.gl/maps/xsmZoxV4tczGP8WN7"
			>
				<p>
					Anna has lived and worked with dance and yoga for over 10
					years. She has a background in contemporary dance, ashtanga
					vinyasa yoga and psychological coaching and has studied with
					several internationally recognized teachers in free-form
					dance, yoga and meditation. She is dedicated to promote
					contemporary wisdom about human flourishing, how we can
					empower ourselves and live more of our potential.
				</p>
				<p>
					The yoga class will start with some theoretical insights
					about the health benefits of yoga. After this we will engage
					in a yoga class which will work for both experienced and
					beginners. After the yoga practice a small Breakfast will be
					served.
				</p>

				<p>
					The yoga will be held in English. Breakfast is provided for
					the first 30 to attend.
				</p>

				<a
					href="https://forms.gle/fUuwFMmgPeMYCiAY9"
					target="_blank"
					rel="noopener noreferrer"
				>
					Link to Register
				</a>
			</EventCard>
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
					lectures based on science. His praised lectures are not just
					famous for being educating and inspiring, but also for their
					insights, humor and high quality. André also makes podcasts
					and is the creator of the popular podcast
					&quot;Stresskolan&quot; where he has interviewed some of the
					most famous doctors, psychologists and scientists about
					stress and how to handle it.
				</p>
				<p>
					This lecture will be held in Swedish. Lunch is provided for
					the first 70 to attend.
				</p>
				<a
					href="https://forms.gle/JhC7FYHmT2KUmG827"
					target="_blank"
					rel="noopener noreferrer"
				>
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
				location="B2"
				locationLink="https://www.kth.se/places/room/id/4a5e9e92-d7aa-486d-8503-b91b331d1662"
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

				<a
					href="https://forms.gle/FWYWeKZQ2Rum9vbP7"
					target="_blank"
					rel="noopener noreferrer"
				>
					Link to Register
				</a>
			</EventCard>
		</Day>
		<Day>
			<DayTitle>Wednesday</DayTitle>
			<EventCard
				imgSrc="/static/images/events/3%20-%20Annika%20Schullerqvist.png"
				imgAlt="Annika Schüllerqvist"
				title="Breakfast Yoga with Annika Schüllerqvist"
				date="Wednesday, May 15, 2019"
				time="08:30 - 09:30"
				location="KTH-Hallen"
				locationLink="https://goo.gl/maps/xsmZoxV4tczGP8WN7"
			>
				<p>
					Come and join us for yoga on wednesday morning. The
					tradition of Yoga has a long history in buddhist and eastern
					philosophy and is associated with multiple health benefits
					for both body and mind.
				</p>
				<p>
					This class will work for both beginners and experienced
					yogis. A small breakfast will be served after class.
				</p>
				<p>
					The yoga will be held in English. Breakfast is provided for
					the first 30 to attend.
				</p>

				<a
					href="https://forms.gle/D63e78JxMewaJVrbA"
					target="_blank"
					rel="noopener noreferrer"
				>
					Link to Register
				</a>
			</EventCard>
			<EventCard
				imgSrc={[
					'/static/images/events/3 - Tim.jpeg',
					'/static/images/events/3 - Erik.jpg'
				]}
				imgAlt={['Tim', 'Erik Bring']}
				title="Everyones right to function differently - How it is to study with special needs and make music with your nose and tounge."
				date="Wednesday, May 15, 2019"
				time="12:00 - 13:00"
				location="B2"
				locationLink="https://www.kth.se/places/room/id/4a5e9e92-d7aa-486d-8503-b91b331d1662"
			>
				<p>
					Every single one of us are different. Yet the education
					system is designed to a great extent with the philosophy of
					“one size fits all”. In this lecture you will get two
					different perspectives of how it is to study with special
					needs. Erik Bring is a Hjärnkoll-ambassador and former
					student at KTH Bipolar disorder. Tim is a KTH student and
					performing DJ with a physical handicap which makes it
					especially important to have a strong mental game.
				</p>

				<p>
					This lecture will be held in English. Lunch is provided for
					the first 90 to attend.
				</p>

				<a
					href="https://forms.gle/vFc6SDqDGSHwFkdH8"
					target="_blank"
					rel="noopener noreferrer"
				>
					Link to Register
				</a>
			</EventCard>
		</Day>
		<Day>
			<DayTitle>Thursday</DayTitle>
			<EventCard
				imgSrc="/static/images/events/4 - Anton Hallin.jpg"
				imgAlt="Anton Hallin"
				title="The most important variable for mental health: the quality of your interpersonal relationships"
				date="Thursday, May 16, 2019"
				time="12:00 - 13:00"
				location="L1"
				locationLink="https://www.kth.se/places/room/id/9d13ee02-9d07-4415-948f-33befa31981c"
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

				<a
					href="https://forms.gle/z4JUoSkpQiMuNTCk6"
					target="_blank"
					rel="noopener noreferrer"
				>
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
				locationLink="https://www.kth.se/places/room/id/24565f05-ff18-4306-a50b-24be99ced05d"
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
				<p>Sponsored by Erasmus and Crebel Consulting</p>

				<a
					href="https://forms.gle/3J9m81K43tkK7ca89"
					target="_blank"
					rel="noopener noreferrer"
				>
					Link to Register
				</a>
			</EventCard>
		</Day>
	</EventsWrapper>
)
