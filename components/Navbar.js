import React, { Component } from 'react'
import styled from 'styled-components'
import screenSizes from '../utils/screen-sizes'
import ActiveLink from './ActiveLink'

const Wrapper = styled.nav`
	margin: 0;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.darkGrey};
	box-sizing: border-box;
	position: relative;

	@media screen and (max-width: ${screenSizes.smallPhone.max}) {
		padding: 10px 20px;
	}

	@media screen and (max-width: ${screenSizes.tablet.max}) {
		padding: 10px 7.5%;
	}
`

const MenuButton = styled.button`
	color: ${({ theme }) => theme.colors.white};
	display: none;
	font-size: 20px;
	padding: 10px 30px 10px 0;
	background: ${({ collapsed }) =>
			collapsed
				? 'url(static/icons/bars-solid.svg)'
				: 'url(static/icons/times-solid.svg)'}
		no-repeat right center;
	/* background-image: url(icons/times-solid.svg); */
	border: none;
	background-size: 15px auto;
	cursor: pointer;
	width: 100%;
	text-align: right;
	/* float: right; */

	@media screen and (max-width: ${screenSizes.tablet.max}) {
		display: block;
	}
`

const List = styled.ul`
	margin: 0;
	padding: 0 50px;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;

	@media screen and (max-width: ${screenSizes.tablet.max}) {
		flex-direction: column;
		${({ collapsed }) => (collapsed ? 'display: none;' : null)}
		align-items: flex-end;
		padding: 0;
	}
`

const Item = styled.li`
	display: inline-block;
	position: relative;
	height: 100%;
	list-style-type: none;
	box-sizing: border-box;

	@media screen and (max-width: ${screenSizes.tablet.max}) {
		width: 100%;
	}
`

const ItemLink = styled.a`
	display: inline-block;
	padding: 30px 30px;
	height: 100%;
	text-decoration: none;
	display: flex;
	align-items: center;
	text-transform: uppercase;
	font-size: 14px;
	font-family: ${({ theme }) => theme.fonts.title};
	font-weight: 600;
	transform: skew(-20deg);
	color: ${({ theme }) => theme.colors.white};
	box-sizing: border-box;
	position: relative;
	transition: 0.3s background-color;

	@media screen and (max-width: ${screenSizes.tablet.max}) {
		transform: none;
		text-align: right;
		padding: 15px;
		width: 100%;
	}

	@media screen and (min-width: ${screenSizes.laptop.min}) {
		&.active,
		&:hover {
			background-color: ${({ theme }) => theme.colors.primary};
		}

		&:after {
			display: none;
		}
	}

	&:after {
		content: '';
		background: #ccc;
		bottom: 25%;
		right: 0;
		height: 50%;
		width: 5px;
		position: absolute;
		transition: 0.3s background-color;
	}

	&:hover:after,
	&.active:after {
		background: ${({ theme }) => theme.colors.primary};
	}
`

const Straightener = styled.span`
	@media screen and (max-width: ${screenSizes.tablet.max}) {
		width: 100%;
	}

	@media screen and (min-width: ${screenSizes.laptop.min}) {
		display: inline-block;
		transform: skew(20deg);
		-webkit-font-smoothing: antialiased;
		box-sizing: border-box;
	}
`

class Navbar extends Component {
	state = { collapsed: true }

	reverseCollapse = () => {
		this.setState(({ collapsed }) => ({ collapsed: !collapsed }))
	}

	render = () => {
		const { collapsed } = this.state

		return (
			<Wrapper>
				<MenuButton
					collapsed={collapsed}
					onClick={this.reverseCollapse}
				>
					Menu
				</MenuButton>
				<List collapsed={collapsed}>
					<Item>
						<ActiveLink
							prefetch
							passHref
							href="/"
							activeClassName="active"
						>
							<ItemLink
								onClick={() =>
									this.setState({ collapsed: true })
								}
							>
								<Straightener>Home</Straightener>
							</ItemLink>
						</ActiveLink>
					</Item>
					<Item>
						<ActiveLink
							prefetch
							passHref
							href="/schedule"
							activeClassName="active"
						>
							<ItemLink
								onClick={() =>
									this.setState({ collapsed: true })
								}
							>
								<Straightener>Schedule</Straightener>
							</ItemLink>
						</ActiveLink>
					</Item>
					<Item>
						<ActiveLink
							prefetch
							passHref
							href="/contact"
							activeClassName="active"
						>
							<ItemLink
								onClick={() =>
									this.setState({ collapsed: true })
								}
							>
								<Straightener>Contact</Straightener>
							</ItemLink>
						</ActiveLink>
					</Item>
				</List>
			</Wrapper>
		)
	}
}

export default Navbar
