/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components'
import Container from '../components/styles/Container'

const Wrapper = styled.div`
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	a,
	li {
		line-height: 1.2;
	}

	b {
		font-weight: 600;
	}

	h1 {
		margin-top: 50px;
	}
`

export default () => (
	<Container>
		<Wrapper>
			<h1>Privacy policy</h1>
			<p>
				THS Mental Health Week, hereafter designated by "us", "we", or
				"our", operates the domain{' '}
				<a href="https://mentalhealthweek.se">
					https://mentalhealthweek.se
				</a>
				, and organizes the activities for the THS Mental Health Week.
				The activities arranged by THS Mental Health Week, will
				hereafter be referred as "our services” or "our events".
			</p>
			<p>
				Here we would like to inform you about our policies regarding
				the collection, use, and disclosure of personal data when you
				use our website, register to our activities through Google Form
				service and/or participate in any event in the Mental Health
				Week and the choices you have associated with that data.
			</p>
			<p>
				We use your data to provide and improve our services. By
				participating in our services, you agree to the collection and
				use of information in accordance with this policy, accessible
				from{' '}
				<a href="https://mentalhealthweek.se/privacy-policy">
					https://mentalhealthweek.se/privacy-policy
				</a>
				.
			</p>
			<h2>Information Collection and Use</h2>
			<p>
				We collect different types of information in order to provide
				our services to the attendees and improve their experience
				during the event.
			</p>
			<h3>Types of Data Collected</h3>
			<h4>Registration Form: Personal Data</h4>
			<p>
				When using our services, we may ask you to provide us with
				specific personal data that will be used to contact or identify
				you during the registration process. We collect this data
				according to balancing of interests. Personally identifiable
				information include:
			</p>
			<ul>
				<li>Email address</li>
				<li>First name and last name</li>
				<li>Dietary restrictions</li>
			</ul>
			<h4>Emails: Organisation/Personal Data</h4>
			<p>
				When exchanging with us through our contact form or by email,
				you may provide us with specific personal that will be used to
				answer your request. In case of an organization or company, we
				may ask you to provide us with specific information that may
				include, but not limited to, company name, address, the
				organizational number. The contact form regards the web form
				that is found on the web page{' '}
			</p>
			<a href="https://mentalhealthweek.se/contact/">
				https://mentalhealthweek.se/contact/
			</a>
			{'.'}
			<h2>Use of Data</h2>
			<p>We use the collected data for various purposes:</p>
			<ul>
				<li>
					Planning purposes, which is critical for us to provide our
					services.
				</li>
				<li>
					Having the possibility to provide food to guests attending
					our events, which complies with the guests dietary
					restrictions.
				</li>
				<li>To notify attendees a reminder about our events.</li>
				<li>
					To share attendee information with our sponsors, which is
					considered a third party. Some of our sponsors require this
					information and uses it as a basis for their invoices.
				</li>
			</ul>
			<p>
				The service used for collecting your personal data during the
				registration process is Google Forms and stored using Google
				Drive, which is accessed controlled and only accessed by the
				project members of THS Mental Health Week that needs to access
				the information. The Tech Team Leader is responsible for
				controlling the storage and the safety of this data during the
				period of the event. Once the event is finished, your personal
				data is deleted from our Google Drive.
			</p>
			<p>
				We ensure that we do not save your personal data after the event
				is finished, however third parties that we share the data with,
				can save the data for a longer time. Third parties that we share
				the data with are themself responsible for ensuring their legal
				basis they use when controlling your personal data. Third
				parties that we share the data with are sponsors that require
				the personal data for the purpose of explaining their expenses
				when sponsering us.
			</p>
			<p>
				Email exchanges and contact forms emails are saved on our
				webmail service (Yandex) and are deleted once the purpose of the
				communication is fulfilled.
			</p>
			<h2>Storage of Data</h2>
			<p>
				Your Personal Data, may be transferred to — and maintained on —
				computers located outside Sweden but still in the EU since we
				are using external services that comply with GDPR to use the
				data as mentioned above.
			</p>
			<p>
				We take all reasonable steps necessary to ensure that your data
				is treated securely and in accordance with this Privacy Policy
				by the external services used, and that no transfer of your
				Personal Data will take place to an organization or a country
				unless there are adequate controls in place including the
				security of your data and other personal information.
			</p>
			<h2>Security Of Data</h2>
			<p>
				The security of your data is important to us but remember that
				no method of transmission over the Internet, or method of
				electronic storage is 100% secure. While we strive to use
				commercially acceptable means to protect your personal data, we
				cannot guarantee its absolute security.
			</p>
			<h2>Service Providers</h2>
			<p>
				We employ third party companies and individuals ("Service
				Providers") to facilitate our services. They are:
			</p>
			<ul>
				<li>Google Drive</li>
				<li>Google Forms</li>
				<li>Yandex Mail</li>
			</ul>
			<p>
				These third parties have access to your personal data only to
				provide the services expected from them and are obligated not to
				disclose or use it for any other purpose.
			</p>
			<h2>Children's Privacy</h2>
			<p>
				Our services are not intended for, and does not address anyone
				under the age of 18 ("Children").
			</p>
			<p>
				We do not knowingly collect personally identifiable information
				from anyone under the age of 18. If you are a parent or guardian
				and you are aware that your Children has provided us with
				personal data, please contact us. If we become aware that we
				have collected personal data from children without verification
				of parental consent, we take steps to remove that information
				from our servers.
			</p>
			<h2>Contact us</h2>
			<p>
				If you have any questions about this Privacy Policy, please
				contact us:
			</p>
			<ul>
				<li>
					By email:{' '}
					<a href="mailto:info@mentalhealthweek.se">
						info@mentalhealthweek.se
					</a>
				</li>
				<li>
					By visiting our website:{' '}
					<a href="https://mentalhealthweek.se">
						https://mentalhealthweek.se
					</a>
				</li>
			</ul>
		</Wrapper>
	</Container>
)
