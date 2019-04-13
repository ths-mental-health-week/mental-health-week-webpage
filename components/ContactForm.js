import styled from 'styled-components'
import Link from 'next/link'
import contactInfo from '../utils/contactInfo'
import SkewedButton from './styles/SkewedButton'

const InputWrapper = styled.div`
	position: relative;
`

const InputField = styled.input`
	font-family: ${({ theme }) => theme.fonts.title};
	font-size: 16px;
	display: block;
	margin-bottom: 20px;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 0;
	transition: 0.4s;
	width: 100%;
	box-sizing: border-box;

	& ~ .focus-border:before,
	& ~ .focus-border:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 0;
		height: 2px;
		background-color: ${({ theme }) => theme.colors.primary};
		transition: 0.3s;
	}
	& ~ .focus-border:after {
		top: auto;
		bottom: 0;
		left: auto;
		right: 0;
	}
	& ~ .focus-border i:before,
	& ~ .focus-border i:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 2px;
		height: 0;
		background-color: ${({ theme }) => theme.colors.primary};
		transition: 0.4s;
	}
	& ~ .focus-border i:after {
		left: auto;
		right: 0;
		top: auto;
		bottom: 0;
	}
	&:focus ~ .focus-border:before,
	&:focus ~ .focus-border:after {
		width: 100%;
		transition: 0.3s;
	}
	&:focus ~ .focus-border i:before,
	&:focus ~ .focus-border i:after {
		height: 100%;
		transition: 0.4s;
	}
`

const InputArea = styled.textarea`
	font-family: ${({ theme }) => theme.fonts.title};
	font-size: 16px;
	display: block;
	margin-bottom: 10px;
	padding: 10px;
	resize: none;
	border: 1px solid #ccc;
	border-radius: 0;
	transition: 0.4s;
	width: 100%;
	box-sizing: border-box;

	& ~ .focus-border:before,
	& ~ .focus-border:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 0;
		height: 2px;
		background-color: ${({ theme }) => theme.colors.primary};
		transition: 0.3s;
	}
	& ~ .focus-border:after {
		top: auto;
		bottom: 0;
		left: auto;
		right: 0;
	}
	& ~ .focus-border i:before,
	& ~ .focus-border i:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 2px;
		height: 0;
		background-color: ${({ theme }) => theme.colors.primary};
		transition: 0.4s;
	}
	& ~ .focus-border i:after {
		left: auto;
		right: 0;
		top: auto;
		bottom: 0;
	}
	&:focus ~ .focus-border:before,
	&:focus ~ .focus-border:after {
		width: 100%;
		transition: 0.3s;
	}
	&:focus ~ .focus-border i:before,
	&:focus ~ .focus-border i:after {
		height: 100%;
		transition: 0.4s;
	}
`

const Label = styled.label`
	font-family: ${({ theme }) => theme.fonts.title};
	font-size: 16px;
	display: block;
	margin-bottom: 3px;
`

const ButtonWrapper = styled.div`
	overflow: hidden;
`

const Disclaimer = styled.div`
	font-size: 10px;
	margin-bottom: 10px;
`

export default () => (
	<form action={`https://formspree.io/${contactInfo.email}`} method="post">
		<Label for="email">Email</Label>
		<InputWrapper>
			<InputField type="email" id="email" name="Email" required />
			<span className="focus-border">
				<i />
			</span>
		</InputWrapper>
		<Label for="message">Message</Label>
		<InputWrapper>
			<InputArea name="Message" id="message" rows="10" />
			<span className="focus-border">
				<i />
			</span>
		</InputWrapper>
		<Disclaimer>
			Do not send personal information, or any other sensitive
			information, if not requested to do so by a project member of THS
			Mental Health Week. By sending a message to us you consent to
			reading and understanding our{' '}
			<Link prefetch href="/privacy-policy">
				<a>Privacy Policy</a>
			</Link>
			.
		</Disclaimer>
		<ButtonWrapper>
			<SkewedButton type="submit" float-right>
				Send message
			</SkewedButton>
		</ButtonWrapper>
	</form>
)
