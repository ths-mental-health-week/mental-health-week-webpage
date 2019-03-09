import styled from 'styled-components'
import Link from 'next/link'

const SkewedLink = styled.a`
	display: inline-block;
	background: ${({ theme }) => theme.colors.primary};
	color: white;
	padding: 4px 15px;
	transform: skew(-20deg);
	text-decoration: none;
	position: relative;
	overflow: hidden;
	box-sizing: border-box;
	-webkit-font-smoothing: antialiased;

	:before {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		background: linear-gradient(
			to right,
			${({ theme }) => theme.colors.primary},
			${({ theme }) => theme.colors.secondary}
		);

		transition: 0.2s transform;
		transform: translateX(100%);
	}

	&:hover:before {
		transform: translateX(0);
	}
`

const Straightener = styled.span`
	display: inline-block;
	transform: skew(20deg);
	-webkit-font-smoothing: antialiased;
`

export default ({ children, href }) => (
	<Link prefetch passHref href={href}>
		<SkewedLink>
			<Straightener>{children}</Straightener>
		</SkewedLink>
	</Link>
)
