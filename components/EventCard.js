import styled from 'styled-components'
import screenSizes from '../utils/screen-sizes'
import ClockIcon from './icons/Clock'
import CalendarIcon from './icons/Calendar'
import SwedishFlagIcon from './icons/SwedishFlag'
import UKFlagIcon from './icons/UKFlag'

const EventCard = styled.div`
	background-color: ${({ theme }) => theme.colors.lightGrey};
	display: flex;
	align-items: flex-start;
	padding: 20px;
	box-shadow: black 10px 10px 23px -14px;
	margin-bottom: 40px;

	@media screen and (max-width: ${screenSizes.tablet.max}) {
		flex-direction: column;
		align-items: center;
	}
`

const EventImageWrapper = styled.div`
	margin-right: 20px;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: ${screenSizes.tablet.max}) {
		margin: 0;
	}
`

const EventTextWrapper = styled.div`
	b {
		font-weight: 800;
	}
`

const EventImage = styled.img`
	height: 300px;
	width: 300px;
	object-fit: cover;

	object-position: ${({ imgObjectPosition }) =>
		imgObjectPosition || 'initial'};

	@media screen and (max-width: ${screenSizes.tablet.max}) {
		margin-bottom: 20px;
	}

	@media screen and (max-width: ${screenSizes.smallPhone.max}) {
		height: calc(100vw - 95px);
		width: calc(100vw - 95px);
	}

	& + & {
		margin-top: 20px;
	}
`

const EventTitleWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`

const EventTitle = styled.h3`
	font-weight: 800;
	margin-top: 0;
	margin-bottom: 0.25rem;
	padding-right: 0.5rem;
	font-size: 1.5rem;
`

const EventPresenter = styled.h3`
	font-weight: 600;
	margin-top: 0;
	margin-bottom: 0.5rem;
	font-size: 1.25rem;
`

const EventInfo = styled.div`
	font-weight: 600;
	p {
		margin: 0;
	}
	span {
		margin-left: 0.5rem;
	}
`

export default ({
	imgSrc,
	imgAlt,
	imgObjectPosition,
	title,
	presenter,
	language,
	date,
	time,
	location,
	locationLink,
	children
}) => (
	<EventCard>
		<EventImageWrapper>
			{Array.isArray(imgSrc) ? (
				imgSrc.map((src, index) => (
					<EventImage
						key={imgAlt[index]}
						src={src}
						alt={imgAlt[index]}
						imgObjectPosition={imgObjectPosition}
					/>
				))
			) : (
				<EventImage
					src={imgSrc}
					alt={imgAlt}
					imgObjectPosition={imgObjectPosition}
				/>
			)}
		</EventImageWrapper>
		<EventTextWrapper>
			<EventTitleWrapper>
				<EventTitle>{title}</EventTitle>
				<span>
					Language:{' '}
					<b style={{ marginRight: '0.5rem' }}>{language}</b>
					{language === 'SVE' && <SwedishFlagIcon size="1.5rem" />}
					{language === 'ENG' && <UKFlagIcon size="1.5rem" />}
				</span>
			</EventTitleWrapper>
			<EventPresenter>{presenter}</EventPresenter>
			<EventInfo>
				<p>
					<CalendarIcon size="1rem" />
					<span>{date}</span>
				</p>
				<p>
					<ClockIcon size="1rem" />
					<span>{time}</span>
				</p>
				<p>
					{location}{' '}
					{locationLink ? <a href={locationLink}>(Map)</a> : null}
				</p>
			</EventInfo>
			{children}
		</EventTextWrapper>
	</EventCard>
)
