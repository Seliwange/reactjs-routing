import './Home.css';
import Nav from '../Nav/Nav';

export default function Home(){
    return(
        <>
            <Nav />
            <header>
                <h1>Human mission to Mars</h1>
            </header>
            <hr />
            <main className="main">
                <p>A human mission to Mars has been the subject of science fiction since the 1880s, and of aerospace engineering and scientific proposals <strong>since the late 1940s</strong>. Plans include landing on Mars for exploration at a minimum, with some considering exploring its moons Phobos and Deimos. Longterm proposals have included sending settlers and starting terraforming of the planet.</p>
                <img src="assets/FirstHumansOnMars.webp" alt="First humans on Mars" width="300" />
                <section>
                    <h2>Exploration of Mars</h2>
                    <p>The exploration of Mars has been a goal of national space programs for decades.<br /> Conceptual work for missions that would involve human explorers has been ongoing since <strong>the 1950s</strong>, with planned missions typically being stated as taking place anywhere between 10 and 30 years from the time they are drafted.The list of <strong>crewed</strong> Mars mission plans shows the various mission proposals that have been put forth by multiple organizations and space agencies in this field of space exploration. Plans have varied from scientific expeditions, in which a small group (between two and eight astronauts) would visit Mars for a period of a few weeks or year, to a continuous presence (e.g. through research stations, colonization or other continuous humanization).[citation needed] <q>Virtual visits to Mars, using haptic technologies, have also been proposed.</q><br />
                    <i>In the 2010s</i>, numerous US, European, and Asian agencies were developing proposals for human missions to Mars.[citation needed] <q>In fiction, Mars is a frequent target of exploration and settlement in books, graphic novels, and films.</q></p>
                </section>
                <section>
                    <h2>Mars shuttles</h2>
                    <p>There are shuttles that was on Mars</p>
                    <ul>
                        <li>Mars 3</li>
                        <li>Viking 1 and Viking 2</li>
                        <li>Mars Pathfinder and its Sojourner rover</li>
                        <li>Spirit and Opportunity rovers</li>
                        <li>Phoenix lander</li>
                        <li>Curiosity rover</li>
                        <li>InSight lander</li>
                        <li>Beagle2</li>
                        <li>Perseverance rover</li>
                    </ul>
                </section>
            </main>
        </>
    );
}