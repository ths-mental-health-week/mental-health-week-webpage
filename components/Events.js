import styled from 'styled-components'
// import EventCard from './EventCard'

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
		</Day>
		<Day>
			<DayTitle>Tuesday</DayTitle>
		</Day>
		<Day>
			<DayTitle>Wednesday</DayTitle>
		</Day>
		<Day>
			<DayTitle>Thursday</DayTitle>
		</Day>
		<Day>
			<DayTitle>Friday</DayTitle>
		</Day>
	</EventsWrapper>
)
