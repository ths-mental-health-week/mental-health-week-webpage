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
	display: flex;
	flex-direction: column;

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

	@media screen and (max-width: ${screenSizes.smallPhone.max}) {
		height: calc(100vw - 95px);
		width: calc(100vw - 95px);
	}

	& + & {
		margin-top: 20px;
	}
`

const EventTitle = styled.h3`
	font-weight: 800;
	margin-top: 0;
	margin-bottom: 0.5rem;
	font-size: 1.5rem;
`

const EventPresenter = styled.h3`
	font-weight: 600;
	margin-top: 0;
	margin-bottom: 1rem;
	font-size: 1.25rem;
`

const EventInfo = styled.div`
	font-weight: 600;
	p {
		margin: 0;
	}
`

export default ({
	imgSrc,
	imgAlt,
	imgObjectPosition,
	title,
	presenter,
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
			<EventTitle>{title}</EventTitle>
			<EventPresenter>{presenter}</EventPresenter>
			<EventInfo>
				<p>{date}</p>
				<p>
					<b>{time}</b>
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
