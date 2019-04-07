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
	/* text-align: center; */

	h2 {
		font-size: 30px;
		/* text-align: center; */
	}
`

const ScheduleWrapper = styled.div``

const Day = styled.div``

const DayTitle = ({ children }) => {
	const Wrapper = styled.h2`
		display: inline-block;
		padding: 10px;
		margin-left: 9px;
		background: ${({ theme }) => theme.colors.secondary};
		color: ${({ theme }) => theme.colors.white};
		transform: skew(-20deg);
	`

	const Straightener = styled.span`
		display: block;
		transform: skew(20deg);
	`

	return (
		<Wrapper>
			<Straightener>{children}</Straightener>
		</Wrapper>
	)
}

const EventCard = styled.div`
	background-color: ${({ theme }) => theme.colors.lightGrey};
	display: flex;
	align-items: center;
	padding: 20px;
	box-shadow: black 10px 10px 23px -14px;
	margin-bottom: 40px;
`

const EventImageWrapper = styled.div`
	margin-right: 20px;
`

const EventTextWrapper = styled.div``

const EventImage = styled.img`
	height: 300px;
	width: 300px;
	object-fit: cover;
`

const EventTitle = styled.h3`
	font-weight: 600;
	margin-top: 0;
	margin-bottom: 16px;
	font-size: 25px;
`

const EventInfo = styled.div`
	p {
		margin: 0;
	}
`
export default () => (
	<>
		<Head>
			<title key="title">Schedule | Mental Health Week</title>
		</Head>
		<Header
			title="Mental Health Week"
			secondaryTitle="Your mental health matters"
		/>
		<Content>
			<Container>
				<Introduction>
					<h2>Event Schedule</h2>
				</Introduction>
				<ScheduleWrapper>
					<Day>
						<DayTitle>Monday</DayTitle>
						<EventCard>
							<EventImageWrapper>
								<EventImage src="http://guessthelighting.com/wp-content/uploads/2012/02/steve_jobs_albert-watson.jpg" />
							</EventImageWrapper>
							<EventTextWrapper>
								<EventTitle>
									Lunch Lecture with Anders
								</EventTitle>
								<EventInfo>
									<p>Monday, May 13, 2019</p>
									<p>12:00 - 13:00</p>
									<p>
										Nya Matsalen - Nymble{' '}
										<a href="/schedule">(Map)</a>
									</p>
								</EventInfo>
								<p>
									The most important variable for mental
									health: the quality of your interpersonal
									relationships. Anton Hallin is a student at
									KTH and holds a bachelor in cognitive
									neurosciense from the Unisersity of Skövde
									from his previous education where he studied
									positive psychology. In this lunch lecture
									he will reveal what unites the most happy
									people in the world, how relationship
									quality can be enhanced by allowing for
									vulnerability and how you compliment your
									friends in the right way (hint, there is a
									wrong way).
								</p>
							</EventTextWrapper>
						</EventCard>
						<EventCard>
							<EventImageWrapper>
								<EventImage src="https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg" />
							</EventImageWrapper>
							<EventTextWrapper>
								<EventTitle>
									Lunch Lecture with Anders
								</EventTitle>
								<EventInfo>
									<p>Monday, May 13, 2019</p>
									<p>12:00 - 13:00</p>
									<p>
										Nya Matsalen - Nymble{' '}
										<a href="/schedule">(Map)</a>
									</p>
								</EventInfo>
								<p>
									The most important variable for mental
									health: the quality of your interpersonal
									relationships. Anton Hallin is a student at
									KTH and holds a bachelor in cognitive
									neurosciense from the Unisersity of Skövde
									from his previous education where he studied
									positive psychology. In this lunch lecture
									he will reveal what unites the most happy
									people in the world, how relationship
									quality can be enhanced by allowing for
									vulnerability and how you compliment your
									friends in the right way (hint, there is a
									wrong way).
								</p>
							</EventTextWrapper>
						</EventCard>
					</Day>
					<Day>
						<DayTitle>Tuesday</DayTitle>
						<EventCard>
							<EventImageWrapper>
								<EventImage src="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2Fb8649f28-6139-11e3-916e-00144feabdc0?source=next&fit=scale-down&width=700" />
							</EventImageWrapper>
							<EventTextWrapper>
								<EventTitle>
									Lunch Lecture with Anders
								</EventTitle>
								<EventInfo>
									<p>Monday, May 13, 2019</p>
									<p>12:00 - 13:00</p>
									<p>
										Nya Matsalen - Nymble{' '}
										<a href="/schedule">(Map)</a>
									</p>
								</EventInfo>
								<p>
									The most important variable for mental
									health: the quality of your interpersonal
									relationships. Anton Hallin is a student at
									KTH and holds a bachelor in cognitive
									neurosciense from the Unisersity of Skövde
									from his previous education where he studied
									positive psychology. In this lunch lecture
									he will reveal what unites the most happy
									people in the world, how relationship
									quality can be enhanced by allowing for
									vulnerability and how you compliment your
									friends in the right way (hint, there is a
									wrong way).
								</p>
							</EventTextWrapper>
						</EventCard>
					</Day>
				</ScheduleWrapper>
			</Container>
		</Content>
	</>
)
