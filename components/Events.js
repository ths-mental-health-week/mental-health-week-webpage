import styled from 'styled-components'
import EventCard from './EventCard'

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
			<EventCard
				imgSrc="/static/images/events/Tilia.jpg"
				imgAlt="Caroline Meijer (Team Tilia)"
				title="Hur vet jag om det är psykisk (o)hälsa eller 'bara' livet som gör ont?"
				presenter="Caroline Meijer (Team Tilia)"
				language="SVE"
				date="Monday, May 3, 2021"
				time="12:00 - 13:00"
				location=""
				locationLink=""
			>
				<p>
					Föreläsningen syftar till att ge ökad kunskap likväl verktyg
					för psykisk hälsa. Vi reder i begreppen psykisk hälsa,
					ohälsa och sjukdom och lyfter den vanligt förekommande
					frågan &quot;Hur vet jag om det är psykisk ohälsa eller
					&#39;bara livet&#39; som gör ont?&quot;
				</p>
				<p>
					Carro är genusvetare och ungdomscoach. YAM (Youth Aware of
					Mental health)-instruktör vid Karolinska Institutet,
					Nationellt centrum för suicidforskning och prevention. På
					Team Tilia, förutom att vara samordnare för stöd online är
					Carro föreläsare samt volontär i stödchatten och under
					lägerverksamhet.
				</p>

				<p>
					Team Tilia är en ideell organisations som sedan 2012 arbetat
					för unga och unga vuxnas psykiska hälsa. Tilia erbjuder
					medmänskligt stöd för alla som behöver någon att prata med
					365 dagar om året.
				</p>
			</EventCard>
			{/* <EventCard
				imgSrc=""
				imgAlt=""
				title="Hur vet jag att det är en mental sjukdom eller 'bara' mitt liv som är jobbigt - Tilia"
				date="Monday, May 3, 2021"
				time="08:30 - 09:30"
				location=""
				locationLink=""
			>
			</EventCard> */}
		</Day>
		<Day>
			<DayTitle>Tuesday</DayTitle>
			<EventCard
				imgSrc="/static/images/events/Maggan Hägglund.jpg"
				imgAlt="Maggan Hägglund"
				title="Drunka inte i dina känslor"
				presenter="Maggan Hägglund"
				language="SVE"
				date="Tuesday, May 4, 2021"
				time="12:00 - 13:00"
				location=""
				locationLink=""
			>
				<p>- lär dig att utnyttja din högkänslighet effektivt</p>

				<p>
					Får du ofta höra att du inbillar dig‚ eller känner för
					mycket?
				</p>
				<p>
					Funderar du över varför du faktiskt trivts bra med att jobba
					ensam oftare under corona-tiden?
				</p>
				<p>
					Verkar det som att du tar in fler intryck än de flesta gör?
				</p>
				<p>
					Då kanske du är extra sensitivt begåvad. Som ungefär 20
					procent av alla.
				</p>

				<p>
					Maggan Hägglund, en av författarna till boken ”Drunkna inte
					i dina känslor” ger en mängd konkreta tips om hur du kan dra
					nytta av din specialbegåvning inte bli utmattad av den.
				</p>
			</EventCard>
			<EventCard
				imgSrc="/static/images/events/Yannick Klein.jpg"
				imgAlt="Yannick Klein"
				title="The role of natural environments in promoting student wellbeing during covid 19"
				presenter="Yannick Klein"
				language="ENG"
				date="Tuesday, May 4, 2021"
				time="14:30 - 15:15"
				location=""
				locationLink=""
			>
				<p>
					With universities teaching online and remote studies,
					students are facing an unpredicted change, coming along with
					a whole new set of stressors on top of the usual madness. I
					want to shed light on physiological and psychological
					demands that can threaten students’ wellbeing, today. In
					that context, I want to challenge how wellbeing is
					understood in a modern individualistic culture such as
					Sweden. We will examine the concepts of hedonic and
					eudaemonic well being from a scientific psychological and
					socio-critical perspective. A promising resource to promote
					wellbeing in a society are access and exposure to natural
					environments. Together, we will firstly explore different
					pathways through which natural environments can act
					beneficially on our health and wellbeing. Secondly, we will
					explore how we can make use of this knowledge in order to
					develop behaviours and routines, to help us be well and
					healthy. I invite you to (re)discover nature with me, as one
					way to counteract COVID-19-related stressors.
				</p>

				<p>
					<i>
						Yannick is an employed <b>PhD Student</b> at the{' '}
						<b>Department of Psychology</b> at{' '}
						<b>Stockholm University</b>, since November 2019. In his
						research, he analyzes the role of access and exposure to
						natural environments in urban areas for health related
						and societal outcomes.
					</i>
				</p>
			</EventCard>
		</Day>
		<Day>
			<DayTitle>Wednesday</DayTitle>
			<EventCard
				imgSrc="/static/images/events/Rebecka Pershagen.jpg"
				imgAlt="Rebecka Pershagen"
				title="Nobody joins a cult - they join a good thing"
				presenter="Rebecka Pershagen"
				language="ENG"
				date="Wednesday, May 5, 2021"
				time="12:00 - 13:00"
				location=""
				locationLink=""
			>
				<p>
					<i>
						Cult indoctrination and contemporary phenomena from a
						perspective of social psychology.
					</i>
				</p>
				<p>
					Cults and totalitarian movements have long been a special
					interest of mine, as I&#39;ve described them as being the
					concentrate of our deepest, and sometimes most destructive,
					human needs and driving forces from a perspective of social
					psychology. As I was writing my latest monologue MENS REA
					(Guilty Mind), a common reaction from people around me was
					&quot;that would never happen to me&quot;. With that play,
					and also with this lecture, I wanted to show them the
					contrary - and also point out some warning signs. Many years
					ago, I heard someone claim that only 5% of the population
					are &quot;immune&quot; to being indoctrinated into a cult.
					This would then mean that 95%, under the
					&quot;right&quot;/wrong circumstances, run the risk of
					indoctrination. By using key concepts from social
					psychology, my lecture takes aim at explaining the
					indoctrination process from my point of view, as well as
					shine a light on some basic contributing societal structures
					and also contemporary phenomena I&#39;ve reflected upon.
				</p>
				<p>
					Rebecka Pershagen has had a decade-long career as an
					award-winning playwright and actress since graduating from
					The Academy of Music and Drama (Teaterhögskolan) at
					Gothenburg University, having toured many European fringe
					festivals with several self-written monologues and
					performance pieces. Her latest monologue MENS REA premiered
					at Stockholm Fringe Festival 2020. She is currently a
					student at the Department of Psychology at Stockholm
					University.
				</p>
			</EventCard>
		</Day>
		<Day>
			<DayTitle>Thursday</DayTitle>
			<EventCard
				imgSrc="/static/images/events/Emanuel Nilsson.jpg"
				imgAlt="Emanuel Nilsson"
				title="To perform and focus on your well-being"
				presenter="Emanuel Nilsson"
				language="ENG"
				date="Thursday, May 6, 2021"
				time="12:00 - 13:00"
				location=""
				locationLink=""
			>
				<p>
					Welcome to a lecture on stress. Emanuel Nilsson talks about
					constructive insights, ideas and lessons from his own
					burnout. He talks to help others and gives concrete advice
					on how you can get a better life balance and perform at the
					same time.
				</p>
				<p>
					It is not always easy to combine good performance and
					well-being. Emanuel talks about healthy selfishness,
					priorities, unproductive stress and enough of recovery.
				</p>
			</EventCard>
		</Day>
		<Day>
			<DayTitle>Friday</DayTitle>
			<EventCard
				imgSrc="/static/images/events/suicide zero.jpeg"
				imgAlt="Maria Lorentzon (Suicide Zero)"
				title="Dare to Ask"
				presenter="Maria Lorentzon (Suicide Zero)"
				language="ENG"
				date="Friday, May 7, 2021"
				time="12:00 - 13:00"
				location=""
				locationLink=""
			>
				<p>
					Suicide Zero started in 2013 and is a non-profit
					organization that works to radically reduce suicide. We meet
					with politicians, speakers and educators. We are frequently
					seen in the media and are very active on social media, with
					over 60,000 followers on Facebook and more than 15,000
					followers on Instagram. We should think of mental health the
					same way we think about fires: The sooner we see the warning
					signs and take the right action, the less damage there will
					be. If you find out that someone close to you is going
					through a major life change, is depressed or is thinking
					about taking their life, then you need to know how to act
					and who you can refer them to. We all have the chance to
					reach out to people who are having a hard time. After this
					training, you will know more about what you can do when you
					suspect someone is having a tough time. You can make a
					difference when someone is having issues with their mental
					health.
				</p>
			</EventCard>
		</Day>
	</EventsWrapper>
)
