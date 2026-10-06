import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { clients, clientGroups } from "@/data/clients";
import { portfolioItems } from "@/data/portfolio";

const founders = [
  {
    name: "Hanumatharaja Y K",
    role: "Founder",
    photo: "/team/hanumantharaja.jpg",
    bio: "Engineering and industrial operations professional with extensive expertise in manufacturing, plant management, production engineering, quality systems, automotive components and industrial supplies.",
  },
  {
    name: "Dr. Shalini R",
    role: "Founder",
    photo: "/team/shalini.jpg",
    bio: "Communications and digital media professional with expertise in strategic communication, IEC campaigns, content, research and social media.",
  },
];

const pillars = [
  ["01", "Strategy", "Audience insight, communication planning and clear messaging."],
  ["02", "Creative", "Ideas, writing, design and storytelling that people remember."],
  ["03", "Production", "Photography, films, video, podcasts and digital production."],
  ["04", "Outreach", "Campaigns and public communication that reach communities."],
];

export default function HomePage() {
  return (
    <div className="vm-home">
      <section className="vm-hero">
        <div className="vm-container vm-hero-grid">
          <div className="vm-hero-copy">
            <p className="vm-kicker">Creative communication, media and IEC</p>
            <h1>Ideas.<br /><em>Stories.</em><br />Impact.</h1>
            <p className="vm-lead">
              Vision Media Communications delivers integrated digital, media and IEC solutions for government departments, NGOs, educational institutions and private organizations.
            </p>
            <div className="vm-actions">
              <Link href="/portfolio" className="vm-btn vm-btn-primary">Our Work</Link>
              <Link href="/contact" className="vm-text-link">Let&apos;s Talk</Link>
            </div>
          </div>
          <div className="vm-hero-art" aria-label="Vision Media Communications creative media production">
            <div className="vm-art-card vm-art-one"><p className="vm-art-note">Communication that connects.</p><span>Media</span></div>
            <div className="vm-art-card vm-art-two"><span>Story</span></div>
            <div className="vm-art-card vm-art-three"><span>IEC</span></div>
          </div>
        </div>
        <div className="vm-strip">
          {['Digital Marketing','Social Media','Branding','Films','Photography','Government IEC','Publications','Web Development'].map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="vm-section vm-about">
        <div className="vm-container vm-two-col">
          <div>
            <p className="vm-kicker">Who we are</p>
            <h2>A communication partner from first thought to final frame.</h2>
          </div>
          <div className="vm-copy">
            <p>Vision Media Communications is a creative communication company delivering integrated digital, media and IEC solutions for government departments, NGOs, educational institutions and private organizations.</p>
            <p>We build meaningful public engagement, support awareness and behaviour-change campaigns, and provide quality creative and digital services — from strategy through to final delivery.</p>
            <Link href="/about" className="vm-text-link dark">Discover Vision Media</Link>
          </div>
        </div>
      </section>

      <section className="vm-section vm-pillars">
        <div className="vm-container">
          <div className="vm-section-head">
            <div><p className="vm-kicker">How we work</p><h2>One team. Four connected capabilities.</h2></div>
            <p>From research and strategy to creative execution and public outreach, every part of the communication process works together.</p>
          </div>
          <div className="vm-pillar-grid">
            {pillars.map(([num, title, desc]) => <div className="vm-pillar" key={num}><span>{num}</span><h3>{title}</h3><p>{desc}</p></div>)}
          </div>
        </div>
      </section>

      <section className="vm-section vm-services">
        <div className="vm-container">
          <div className="vm-section-head">
            <div><p className="vm-kicker">Our services</p><h2>13 disciplines.<br />One communication team.</h2></div>
            <Link href="/services" className="vm-btn vm-btn-outline">View all services</Link>
          </div>
          <div className="vm-service-list">
            {services.map((service) => <Link href="/services" className="vm-service" key={service.num}><strong>{service.title}</strong><p>{service.desc}</p></Link>)}
          </div>
        </div>
      </section>

      <section className="vm-iec">
        <div className="vm-container vm-iec-grid">
          <div><p className="vm-kicker light">Government IEC</p><h2>Communication for a stronger, more aware society.</h2><p>IEC — Information, Education, Communication — translates policy and public priorities into messages people understand, trust, and act on.</p><Link href="/government-iec" className="vm-btn vm-btn-light">Explore Government IEC</Link></div>
          <div className="vm-iec-steps">{['Research','Strategy','Content','Creative','Media','Public Outreach','Measurement'].map((step, i) => <div key={step}><span>{String(i+1).padStart(2,'0')}</span>{step}</div>)}</div>
        </div>
      </section>

      <section className="vm-section vm-work">
        <div className="vm-container">
          <div className="vm-section-head"><div><p className="vm-kicker">Selected work</p><h2>Communication built for real audiences.</h2></div><Link href="/portfolio" className="vm-text-link dark">View portfolio</Link></div>
          <div className="vm-work-grid">
            {portfolioItems.slice(0, 4).map((item, i) => <Link href={`/portfolio/${item.slug}`} key={item.slug} className={`vm-work-card vm-work-${i+1}`}><span>{item.category}</span><h3>{item.title}</h3><p>{item.description}</p></Link>)}
          </div>
        </div>
      </section>

      <section className="vm-section vm-founders">
        <div className="vm-container">
          <div className="vm-section-head"><div><p className="vm-kicker">The people</p><h2>Founders.</h2></div><p>Leadership combining communication, digital media and operational experience.</p></div>
          <div className="vm-founder-grid">{founders.map((person) => <div className="vm-founder" key={person.name}><div className="vm-founder-photo"><Image src={person.photo} alt={person.name} fill sizes="(max-width: 768px) 100vw, 440px" priority /></div><p className="vm-founder-role">{person.role}</p><h3>{person.name}</h3><p>{person.bio}</p></div>)}</div>
        </div>
      </section>

      <section className="vm-section vm-clients">
        <div className="vm-container">
          <p className="vm-kicker">Client ecosystem</p><h2>Built to work across sectors.</h2>
          <div className="vm-client-groups">{clientGroups.map(group => <div key={group}><strong>{group}</strong><ul>{clients.filter(c => c.group === group).map(c => <li key={c.name}>{c.name}</li>)}</ul></div>)}</div>
        </div>
      </section>

      <section className="vm-cta"><div className="vm-container vm-cta-inner"><div><p className="vm-kicker light">Let&apos;s work together</p><h2>Your idea deserves a clear voice.</h2><p>Let&apos;s turn ideas into communication that connects with people.</p></div><Link href="/contact" className="vm-btn vm-btn-light">Start a Project</Link></div></section>
    </div>
  );
}
