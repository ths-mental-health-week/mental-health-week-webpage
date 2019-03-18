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

	h2 {
		text-align: center;
	}
`

const Schedule = styled.div`
	margin-top: 60px;

	h2 {
		text-align: center;
	}
`

const ScheduleEventItem = ({ event, eindex }) => (
	<div key={eindex} style={{ borderStyle: 'solid' }}>
		<span style={{ marginLeft: '10px' }}>{event.time}</span>
		<span style={{ marginLeft: '30px' }}>{event.desc}</span>
	</div>
)

const ScheduleDayItem = ({ day, dindex }) => (
	<div key={dindex}>
		<h3>{day.date}</h3>

		{day.events.map((event, eindex) => (
			<ScheduleEventItem event={event} eindex={eindex} />
		))}

		<br />
	</div>
)

function getSchedule() {
	const scheduleData = [
		{
			date: 'Monday',
			events: [
				{ time: '10.00-11.00', desc: 'lorem ipsum' },
				{ time: '12.00-13.00', desc: 'lorem ipsum' }
			]
		},
		{
			date: 'Tuesday',
			events: [
				{ time: '10.00-11.00', desc: 'lorem ipsum' },
				{ time: '12.00-13.00', desc: 'lorem ipsum' },
				{ time: '13.00-15.00', desc: 'lorem ipsum' }
			]
		},
		{
			date: 'Wednesday',
			events: [
				{ time: '10.00-11.00', desc: 'lorem ipsum' },
				{ time: '12.00-13.00', desc: 'lorem ipsum' }
			]
		}
	]

	return (
		<Schedule>
			{scheduleData.map((day, dindex) => (
				<ScheduleDayItem day={day} dindex={dindex} />
			))}
		</Schedule>
	)
}

export default () => (
	<>
		<Head>
			<title key="title">Schedule | THS Mental Health Week</title>
		</Head>
		<Header
			title="THS Mental Health Week"
			secondaryTitle="You gotta nourish to flourish"
		/>
		<Content>
			<Container>
				<Introduction>
					<h2>Event Schedule</h2>
				</Introduction>

				{getSchedule()}
			</Container>
		</Content>
	</>
)
