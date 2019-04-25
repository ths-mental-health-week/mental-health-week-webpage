import styled from 'styled-components'
import screenSizes from '../utils/screen-sizes'

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
	@media screen and (max-width: ${screenSizes.tablet.max}) {
		margin: 0;
	}
`

const EventTextWrapper = styled.div``

const EventImage = styled.img`
	height: 300px;
	width: 300px;
	object-fit: cover;

	object-position: ${({ imgObjectPosition }) =>
		imgObjectPosition || 'initial'};

	@media screen and (max-width: ${screenSizes.tablet.max}) {
		margin-bottom: 20px;
	}
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

export default ({
	imgSrc,
	imgAlt,
	imgObjectPosition,
	title,
	date,
	time,
	location,
	locationLink,
	children
}) => (
	<EventCard>
		<EventImageWrapper>
			<EventImage
				src={imgSrc}
				alt={imgAlt}
				imgObjectPosition={imgObjectPosition}
			/>
		</EventImageWrapper>
		<EventTextWrapper>
			<EventTitle>{title}</EventTitle>
			<EventInfo>
				<p>{date}</p>
				<p>{time}</p>
				<p>
					{location}{' '}
					{locationLink ? <a href={locationLink}>(Map)</a> : null}
				</p>
			</EventInfo>
			{children}
		</EventTextWrapper>
	</EventCard>
)
