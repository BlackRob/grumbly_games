import Head from "next/head";
import SiteHeader from "../components/siteHeader";
import SiteFooter from "../components/siteFooter";
import TypeButtonDiv from "../components/typeButtonDiv";
import YouTubeVid from "../components/youTubeVid";
import MyHeadStuff from "../components/myHeadStuff";
import {
  Conj,
  Noun,
  Verb,
  Adj,
  Adv,
  Pron,
  Prep,
  Punc,
} from "../components/elementAliases";

const Privacy = () => (
  <div className="container">
    <Head>
      <MyHeadStuff title="Privacy policy for details" />
    </Head>
    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">Privacy policy</h2>
        <h4 className="description">
          (for web, Android and iOS versions of details)
        </h4>
      </div>
      <div className="content">
        "details" doesn't save or use any information about its users. It
        doesn't require an account and doesn't remember your history.
      </div>
      <div className="sidebar">
        <TypeButtonDiv />
      </div>
    </main>
    <SiteFooter />

    <style jsx>{``}</style>
  </div>
);

export default Privacy;
