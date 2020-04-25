import Head from 'next/head'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import TypeButtonDiv from '../components/typeButtonDiv'
import YouTubeVid from '../components/youTubeVid'
import Fold from '../components/fold'
import MyHeadStuff from '../components/myHeadStuff'

const ThisPage = () => (
  <div className="container">
    <Head>
      <MyHeadStuff title="Pronouns" />
    </Head>
    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">
          Pronouns
        </h2>
        <p className="description">Pronouns either take the place of nouns
        or make reference to them. They are very important, but there aren't
        very many of them: there are just over 100 pronouns in English,
        but we use them all the time!
          </p>
        <YouTubeVid vidID="dntgsqKjQ0Y" caption="placeholder video" />
      </div>
      <div className="content">
        <h3>Types of pronouns</h3>
        <p>
          Pronouns are some of the most frequently used words in English:
            25 of the 100 most common English words are pronouns!<sup>1</sup> so
            you will need to use a lot of nouns when you play details.
            Pronouns are usually broken into categories, so you should learn
            about the different types of categories so you can use them
            (in details and in life.)
          </p>
        <h4>Personal pronouns for subjects</h4>
        <p>In English, the personal subject pronouns are "I", "it", "he", "she", "we",
        "you" and "they". These are also sometimes referred to just as "subject
        pronouns" (to differentiate them from "object pronouns"), but other
        types of pronouns can also serve as the subject of a sentence.
          </p>
        <code><span className="sPron">She</span> doesn't like robots.</code>
        <p>When playing details, every starter sentence already has a subject,
        so if you want to add a personal pronoun, you also need a conjunction
        card (usually). For example, we can add
            <span className="cConj">and</span> and <span className="sPron">I</span> to
            the following sentence:
          </p>
        <code>The elephants ate cupcakes.</code>
        <code>The elephants <span className="sConj">and</span> <span className="sPron">I</span> ate cupcakes.</code>
        <p>But be careful doing this: in some tenses, some verbs have different
        forms in the depending on whether the subject is singular or plural, i.e
            we say "I <i>am</i>" but "we <i>are</i>", and "he <i>eats</i>" but
            "he and she <i>eat</i>". You can't change "He likes cookies." to
            "He and she likes cookies." That would be wrong, wrong, wrong!
            Don't do it! But "He or she likes cookies." would be fine.
          </p>
        <h4>Personal pronouns for objects</h4>
        <p>Often just called "object pronouns" (incorrectly --lots of other pronouns
        can functions as "objects" in the grammatical sense), these pronouns
        are used as the object of a verb or preposition. The personal object
        pronouns in English are "me", "us", "you", "her", "him", "it" and "them".
          </p>
        <code>The girls all hate <span className="sPron">him</span>.</code>
        <code>We threw apples at <span className="sPron">them</span>.</code>

        <h4>Possessive pronouns</h4>
        <h4>Reflexive pronouns</h4>
        <h4>Intensive pronouns</h4>
        <h4>Indefinite pronouns</h4>
        <h4>Demonstrative pronouns</h4>
        <h4>Interrogative pronouns</h4>
        <h4>Relative pronouns</h4>
        <h4>Archaic pronouns</h4>
        <p>The following video gives examples of how to use pronouns:</p>
        <p><sup>1</sup> This isn't completely true: although there are 25 pronouns
          on the top 100 list, some of them are not used only as pronouns.
          "One" can be used as a pronoun: "The dragon ate one."
          But it can also be used as an adjective: "The dragon ate one princess."</p>
      </div>
      <div className="sidebar">
        <TypeButtonDiv />
      </div>
    </main>
    <SiteFooter />
    <style jsx>{`

    `}</style>

  </div >
)

export default ThisPage