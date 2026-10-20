import Reveal from "./Reveal";
import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact">
      <Reveal dir="scale">
        <div className="ct">
          <h2>Let’s build something great.</h2>
          <p className="lead">
            I’m open to exciting opportunities, collaborations, and projects where I can build meaningful iOS experiences.
          </p>
          <a className="btn pri" style={{ marginTop: 16 }} href={`mailto:${profile.email}`}>Send email</a>
          <div className="cl">
            <a href={`mailto:${profile.email}`}>✉ {profile.email}</a>
            <a href={`tel:${profile.phone.replace(/\s+/g, "")}`}>☎ {profile.phone}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer noopener">in LinkedIn</a>
          </div>
        </div>
      </Reveal>
      <footer>
        <span>Athiyaman T — iOS Developer</span>
        <span>Designed with passion for great mobile experiences.</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </section>
  );
}
