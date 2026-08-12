import { useLayoutEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  EyeSlash,
  HardDrives,
  List,
  ShieldCheck,
  TelegramLogo,
  X,
} from "@phosphor-icons/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sources = [
  {
    title: "David Chaum's eCash history",
    detail: "Timeline, DigiCash releases, client artifacts, and merchant archive",
    href: "https://chaum.com/ecash/",
  },
  {
    title: "DigiCash introduction to eCash",
    detail: "Archived interface and blind signature walkthrough",
    href: "https://web.archive.org/web/19961102121426/http://digicash.com:80/publish/ecash_intro/ecash_intro.html",
  },
  {
    title: "Blind Signatures for Untraceable Payments",
    detail: "Chaum's 1982 paper establishing the cryptographic primitive",
    href: "https://chaum.com/wp-content/uploads/2022/01/Chaum-blind-signatures.pdf",
  },
  {
    title: "Bitcoin: A Peer-to-Peer Electronic Cash System",
    detail: "The 2008 white paper that arrived fourteen years after the CyberBucks trial began",
    href: "https://bitcoin.org/bitcoin.pdf",
  },
  {
    title: "Scaleable, Secure Cash Payment for WWW Resources",
    detail: "A 1995 account of the trial and its 100 CyberBuck allocation",
    href: "https://www.w3.org/Conferences/WWW4/Papers/228/",
  },
  {
    title: "European Commission ITEA '95 notice",
    detail: "A contemporary report stating one million CyberBucks were issued",
    href: "https://cordis.europa.eu/article/id/5235-itea95-awards-announced-at-eitc95",
  },
  {
    title: "Robinhood Chain",
    detail: "Official overview of the permissionless Ethereum Layer 2",
    href: "https://robinhood.com/chain",
  },
  {
    title: "Robinhood Chain documentation",
    detail: "Official network configuration and developer resources",
    href: "https://docs.robinhood.com/chain/connecting/",
  },
];

const history = [
  {
    year: "1982",
    title: "The signature that could not see.",
    body: "David Chaum published blind signatures. A bank could validate a digital coin without learning the identifying number hidden inside it.",
    image: "/assets/eifig13.gif",
    alt: "Archived DigiCash diagram showing a blinded coin sent to a bank for signature",
    note: "THE PRIVACY PRIMITIVE",
  },
  {
    year: "May 1994",
    title: "Cash crossed the web.",
    body: "DigiCash demonstrated what it called the first electronic cash payment over computer networks, sent between Geneva and Amsterdam.",
    image: "/assets/eifig10.gif",
    alt: "Archived DigiCash diagram showing electronic cash withdrawn from a bank",
    note: "BEFORE ONLINE COMMERCE WAS ORDINARY",
  },
  {
    year: "Oct. 1994",
    title: "CyberBucks went public.",
    body: "The public trial opened with a notional one million CyberBuck capitalization. Early participants received 100 test units and a wallet for their computer.",
    image: "/assets/eifig2.gif",
    alt: "DigiCash eCash withdrawal window from the archived Windows client",
    note: "CURRENCY STORED ON A HARD DRIVE",
  },
  {
    year: "1995",
    title: "A tiny economy appeared.",
    body: "Users paid for information, software, games, images, postcards, shirts, and services. Informal markets even quoted CyberBucks against real currency.",
    image: "/assets/eifig3.gif",
    alt: "DigiCash payment request for a two cent online game",
    note: "MARKETS BEFORE BLOCKCHAINS",
  },
];

const evidence = [
  {
    image: "/assets/eifig1.gif",
    alt: "DigiCash eCash status window displaying 25 dollars",
    title: "Cash sat on the hard disk",
    text: "The status window showed coins locally available to spend. DigiCash compared funding it to putting notes in a physical wallet.",
    source: "DigiCash client introduction, archived 1996",
  },
  {
    image: "/assets/eifig2.gif",
    alt: "DigiCash eCash withdraw dialog",
    title: "Withdraw, deposit, or send",
    text: "The Windows client moved value between an account and local coins, with denomination management handled by the software.",
    source: "DigiCash eCash client 2.1",
  },
  {
    image: "/assets/eifig3.gif",
    alt: "DigiCash incoming payment request dialog",
    title: "Two cents for a web game",
    text: "One archived example asks for a $0.02 payment to play tic tac toe. A single click confirmed the transfer.",
    source: "DigiCash payment request example",
  },
  {
    image: "/assets/eifig9.gif",
    alt: "DigiCash payment log window",
    title: "A private wallet kept receipts",
    text: "The client recorded withdrawals, payments, receipts, and deposits locally so the owner could review activity.",
    source: "DigiCash digital statement interface",
  },
];

const merchants = [
  {
    name: "Publishing",
    detail: "Books, articles, and paid information",
    logo: "/assets/american-book.gif",
    alt: "American Book Center merchant mark",
  },
  {
    name: "Software",
    detail: "Utilities, downloads, and internet tools",
    logo: "/assets/delorie.png",
    alt: "Delorie Software merchant mark",
  },
  {
    name: "Digital art",
    detail: "Images, paintings, and experimental media",
    logo: "/assets/arkyo.gif",
    alt: "Arkyo eCash Shop merchant mark",
  },
  {
    name: "Exchange",
    detail: "Primitive markets and real currency offers",
    logo: "/assets/firecloud.gif",
    alt: "Firecloud Solutions merchant mark",
  },
  {
    name: "Internet oddities",
    detail: "Games, wishes, postcards, shirts, and more",
    logo: "/assets/wishing-well.gif",
    alt: "World Wide Web Wishing Well merchant mark",
  },
];

const marqueeItems = [
  "BEFORE BITCOIN, THERE WAS CYBERBUCKS.",
  "THREE CIRCLES. ONE SIGNAL.",
  "DIGITAL CURRENCY HISTORY SINCE 1994.",
  "BLIND SIGNATURES. PUBLIC TRIAL. REAL RECEIPTS.",
  "NOW THE STORY COMES ALIVE ON ROBINHOOD CHAIN.",
  "A 1994 NAME. A NEW COMMUNITY CHAPTER.",
];

const brandLines = [
  "Before Bitcoin, there was CyberBucks.",
  "Now the story comes alive on Robinhood Chain.",
  "Digital currency history returns to the timeline.",
];

const chainFacts = [
  { value: "L2", label: "Ethereum compatible" },
  { value: "4663", label: "Mainnet chain ID" },
  { value: "ETH", label: "Native gas token" },
];

const contractAddress = "0xe84D5bDF884f2845b8861E93C3323C811D426dd6";

function XSocialIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

function ExternalLink({ href, children, className = "" }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight aria-hidden="true" weight="bold" />
    </a>
  );
}

function ChapterImage({ src, alt, className = "", eager = false }) {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      width="1536"
      height="1024"
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      decoding="async"
    />
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="CyberBucks home">
        <img src="/assets/cyberbucks-coin-512.png" alt="" width="40" height="40" />
        CYBERBUCKS
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="#timeline">The history</a>
        <a href="#proof">The proof</a>
        <a href="#chain">The chain</a>
      </nav>
      <div className="nav-end">
        <div className="social-nav" aria-label="CyberBucks social media">
          <a href="https://x.com/cyberbucksrh?s=11" target="_blank" rel="noreferrer" aria-label="CyberBucks on X">
            <XSocialIcon />
          </a>
          <a href="https://t.me/cyberbucksrh" target="_blank" rel="noreferrer" aria-label="CyberBucks on Telegram">
            <TelegramLogo aria-hidden="true" weight="fill" />
          </a>
        </div>
        <a className="nav-action" href="#sources">
          Sources <ArrowRight aria-hidden="true" weight="bold" />
        </a>
      </div>
      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" /> : <List aria-hidden="true" />}
      </button>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="#timeline" onClick={() => setOpen(false)}>The history</a>
          <a href="#proof" onClick={() => setOpen(false)}>The proof</a>
          <a href="#chain" onClick={() => setOpen(false)}>The chain</a>
          <a href="#merchants" onClick={() => setOpen(false)}>What it bought</a>
          <a href="#sources" onClick={() => setOpen(false)}>Sources</a>
          <div className="mobile-social-nav" aria-label="CyberBucks social media">
            <a href="https://x.com/cyberbucksrh?s=11" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
              <XSocialIcon /> X
            </a>
            <a href="https://t.me/cyberbucksrh" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
              <TelegramLogo aria-hidden="true" weight="fill" /> Telegram
            </a>
          </div>
        </nav>
      )}
      <span className="nav-progress" aria-hidden="true" />
    </header>
  );
}

function Hero() {
  const [copied, setCopied] = useState(false);

  const copyContractAddress = async () => {
    if (!contractAddress) return;
    await navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Before Bitcoin, there was CyberBucks.</p>
        <h1><span>History of</span><span>digital currency</span></h1>
        <p className="hero-subhead">A 1994 digital-cash name returns as an independent community coin planned for Robinhood Chain.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#timeline">
            Meet the original <ArrowRight aria-hidden="true" weight="bold" />
          </a>
          <ExternalLink className="button button-secondary" href="https://docs.robinhood.com/chain/">Explore the chain</ExternalLink>
        </div>
        <div className="contract-address" id="contract" aria-label="CyberBucks contract address">
          <div className="contract-address-heading">
            <span>Contract address</span>
            <span>Robinhood Chain</span>
          </div>
          <div className="contract-address-value">
            <code aria-label={contractAddress || "Contract address not published"}>{contractAddress}</code>
            <button
              type="button"
              onClick={copyContractAddress}
              disabled={!contractAddress}
              aria-label={contractAddress ? "Copy contract address" : "Contract address not published yet"}
            >
              {copied ? <Check aria-hidden="true" weight="bold" /> : <Copy aria-hidden="true" weight="bold" />}
              <span>{copied ? "Copied" : contractAddress ? "Copy" : "Pending"}</span>
            </button>
          </div>
        </div>
      </div>
      <figure className="hero-media">
        <img
          src="/assets/cyberbucks-coin.png"
          alt="CyberBucks gold coin logo with three yellow circles and the original blue branching mark"
          width="1536"
          height="1536"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-artifact" aria-label="Original DigiCash wallet interface">
          <img src="/assets/eifig1.gif" alt="Original DigiCash eCash status window" />
          <span>1994 / THE FIRST CYBERBUCKS</span>
        </div>
        <figcaption>
          <span>CYBERBUCKS COIN MARK</span>
          <span>DESIGNED FOR ROBINHOOD CHAIN</span>
        </figcaption>
      </figure>
    </section>
  );
}

function LoreMarquee() {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <div className="lore-marquee" aria-label="Key CyberBucks facts">
      <div className="marquee-track">
        {doubled.map((item, index) => (
          <span key={`${item}-${index}`} aria-hidden={index >= marqueeItems.length}>{item}<i aria-hidden="true" /></span>
        ))}
      </div>
    </div>
  );
}

function BrandManifesto() {
  return (
    <section className="section brand-manifesto" id="chain" aria-labelledby="brand-manifesto-title">
      <div className="brand-manifesto-intro">
        <h2 id="brand-manifesto-title">The history comes alive on Robinhood Chain.</h2>
        <p>CyberBucks was the trial currency used in DigiCash's public eCash experiment in 1994. This independent community project carries that documented story toward Robinhood Chain.</p>
        <div className="chain-facts" aria-label="Robinhood Chain network facts">
          {chainFacts.map((fact) => (
            <div key={fact.label}>
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
            </div>
          ))}
        </div>
        <p className="chain-disclaimer">CyberBucks is an independent project. It is not issued, sponsored, or endorsed by Robinhood Markets, Inc. or its affiliates.</p>
      </div>
      <div className="brand-lines" aria-label="CyberBucks brand mottos">
        {brandLines.map((line, index) => (
          <blockquote key={line}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>&ldquo;{line}&rdquo;</p>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

function ProofGrid() {
  return (
    <section className="section proof-section" id="proof">
      <div className="section-heading">
        <h2>Not a white paper.<br />A working currency.</h2>
        <p>CyberBucks moved between people, shops, and a digital mint while the public web was still learning how to sell anything.</p>
      </div>
      <div className="proof-grid">
        <article className="proof-card proof-card-main">
          <ChapterImage
            className="proof-photo"
            src="/assets/chapter-proof.jpg"
            alt="A complete 1990s evidence desk with floppy disks, mouse, papers, and digital cash artifacts"
          />
          <div className="proof-main-copy">
            <HardDrives aria-hidden="true" weight="duotone" />
            <h3>The wallet was the computer.</h3>
            <p>Coins were downloaded from a mint and stored on the user's hard disk, ready for point and click payments.</p>
          </div>
          <img className="proof-original" src="/assets/eifig1.gif" alt="Original DigiCash wallet balance window" />
        </article>
        <article className="proof-card proof-card-supply">
          <p className="metric">1,000,000</p>
          <div>
            <h3>CyberBucks in the experiment</h3>
            <p>Contemporary accounts describe a fixed initial capitalization that DigiCash did not plan to expand.</p>
          </div>
        </article>
        <article className="proof-card proof-card-privacy">
          <EyeSlash aria-hidden="true" weight="duotone" />
          <p className="metric-small">Blind signed</p>
          <p>The bank validated a coin without seeing the number it signed.</p>
        </article>
        <article className="proof-card proof-card-start">
          <ShieldCheck aria-hidden="true" weight="duotone" />
          <p className="metric-small">100 free</p>
          <p>Trial participants received a starting CyberBuck balance.</p>
        </article>
      </div>
      <p className="proof-note">Participant totals changed through the multi year trial. Sources report about 10,000 in 1995 and more than 30,000 later.</p>
    </section>
  );
}

function PrivacyStatement() {
  const words = "The bank could sign the money without seeing whose money it became.".split(" ");
  return (
    <section className="section privacy-statement">
      <div className="privacy-photo" data-parallax>
        <ChapterImage
          src="/assets/chapter-privacy.jpg"
          alt="A full paper envelope and embossed seal representing a private blind signature transaction"
        />
        <span>VALIDATION WITHOUT IDENTIFICATION</span>
      </div>
      <div className="privacy-copy">
        <p>THE CRYPTOGRAPHIC IDEA</p>
        <h2 className="scrub-heading">
          {words.map((word, index) => (
            <span className="scrub-word" key={`${word}-${index}`}>{word}{" "}</span>
          ))}
          <span className="inline-artifact" aria-hidden="true"><img src="/assets/eifig13.gif" alt="" /></span>
        </h2>
        <div className="privacy-explainer">
          <p>Blind signatures separated validation from identity. The mint could reject a repeated serial number while remaining unable to connect a valid spend to the withdrawal that created it.</p>
          <ExternalLink href="https://chaum.com/wp-content/uploads/2022/01/Chaum-blind-signatures.pdf" className="text-link">Read Chaum's 1982 paper</ExternalLink>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="timeline-section" id="timeline">
      <div className="timeline-intro section">
        <h2>From cryptography<br />to a tiny economy.</h2>
        <p>Four moments turned an academic privacy protocol into spendable bytes.</p>
      </div>
      <div className="timeline-stage section">
        <figure className="timeline-visual">
          <ChapterImage
            src="/assets/chapter-timeline.jpg"
            alt="An archival desk with a full CRT monitor, floppy disks, folders, and period documents"
          />
          <figcaption>
            <span>THE DIGICASH FILES</span>
            <span>1982 TO 1995</span>
          </figcaption>
        </figure>
        <div className="timeline-list">
          {history.map((item) => (
            <article className="timeline-entry" key={item.year}>
              <div className="timeline-entry-meta">
                <span>{item.year}</span>
                <span>{item.note}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <figure className="archive-artifact">
                <img src={item.image} alt={item.alt} />
                <figcaption>ORIGINAL DIGICASH ARCHIVE</figcaption>
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EvidenceCarousel() {
  const [active, setActive] = useState(0);
  const item = evidence[active];
  const move = (direction) => setActive((current) => (current + direction + evidence.length) % evidence.length);

  return (
    <section className="section evidence-section" aria-labelledby="evidence-title">
      <div className="evidence-heading">
        <h2 id="evidence-title">The interface was almost ordinary.</h2>
        <p>The radical part was hidden behind tiny Windows dialogs.</p>
      </div>
      <div className="evidence-stage">
        <ChapterImage
          className="evidence-photo"
          src="/assets/chapter-interface.jpg"
          alt="A complete CRT monitor and keyboard showing a period digital cash interface"
        />
        <div className="evidence-window" key={item.image}>
          <img src={item.image} alt={item.alt} />
        </div>
      </div>
      <div className="evidence-console" aria-live="polite">
        <div className="evidence-copy">
          <span className="carousel-count">{String(active + 1).padStart(2, "0")} / {String(evidence.length).padStart(2, "0")}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <span className="evidence-source">{item.source}</span>
        </div>
        <div className="artifact-selector" aria-label="Choose an interface artifact">
          {evidence.map((artifact, index) => (
            <button
              type="button"
              className={active === index ? "is-active" : ""}
              onClick={() => setActive(index)}
              aria-label={`Show ${artifact.title}`}
              aria-pressed={active === index}
              key={artifact.title}
            >
              <img src={artifact.image} alt="" />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </button>
          ))}
        </div>
        <div className="carousel-controls">
          <button type="button" onClick={() => move(-1)} aria-label="Previous artifact"><ArrowLeft aria-hidden="true" /> Previous</button>
          <button type="button" onClick={() => move(1)} aria-label="Next artifact">Next <ArrowRight aria-hidden="true" /></button>
        </div>
      </div>
    </section>
  );
}

function MerchantAccordion() {
  const [active, setActive] = useState(0);
  return (
    <section className="section merchant-section" id="merchants">
      <div className="merchant-heading">
        <h2>What could CyberBucks buy?</h2>
        <p>More than a demo. More than a thought experiment.</p>
      </div>
      <figure className="merchant-photo">
        <ChapterImage
          src="/assets/chapter-merchants.jpg"
          alt="A full 1990s mail order table with a complete shirt, software box, postcards, disk, and printed receipt"
        />
        <figcaption>THE PHYSICAL EDGE OF AN ONLINE ECONOMY</figcaption>
      </figure>
      <div className="merchant-accordion">
        {merchants.map((merchant, index) => (
          <button
            className={`merchant-panel ${active === index ? "is-active" : ""}`}
            type="button"
            key={merchant.name}
            onClick={() => setActive(index)}
            onFocus={() => setActive(index)}
            aria-expanded={active === index}
          >
            <span className="merchant-index">0{index + 1}</span>
            <span className="merchant-name">{merchant.name}</span>
            <span className="merchant-expanded">
              <img src={merchant.logo} alt={merchant.alt} />
              <strong>{merchant.detail}</strong>
            </span>
          </button>
        ))}
      </div>
      <div className="merchant-footnote">
        <img src="/assets/acceptmt.gif" alt="Original DigiCash eCash accepted merchant banner" />
        <p>David Chaum's archive preserves dozens of merchant marks, from publishers and software shops to casinos, art sellers, and internet curiosities.</p>
        <ExternalLink href="https://chaum.com/ecash/" className="text-link">Browse the merchant archive</ExternalLink>
      </div>
    </section>
  );
}

function Sources() {
  return (
    <section className="section sources-section" id="sources">
      <div className="sources-layout">
        <figure className="sources-photo" data-parallax>
          <ChapterImage
            src="/assets/chapter-sources.jpg"
            alt="A complete research desk with archival binders, papers, floppy disks, and printed DigiCash records"
          />
          <figcaption>PRIMARY SOURCES, PRESERVED</figcaption>
        </figure>
        <div className="sources-title">
          <h2>Trace every claim.</h2>
          <p>This story is strongest when the receipts stay attached.</p>
        </div>
      </div>
      <div className="source-list">
        {sources.map((source) => (
          <ExternalLink href={source.href} className="source-row" key={source.title}>
            <span>
              <strong>{source.title}</strong>
              <small>{source.detail}</small>
            </span>
          </ExternalLink>
        ))}
      </div>
      <aside className="research-note">
        <ShieldCheck aria-hidden="true" weight="duotone" />
        <div>
          <strong>A note on the numbers</strong>
          <p>The one million figure refers to the trial's initial currency capitalization. The often repeated 30,000 figure describes later account growth, not necessarily the launch day audience.</p>
        </div>
      </aside>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-image">
        <ChapterImage
          src="/assets/chapter-cta.jpg"
          alt="A quiet 1994 computer room at dawn with a complete workstation beside an open window"
        />
        <div className="footer-cta">
          <p>THE STORY STARTED BEFORE BITCOIN</p>
          <h2>Now it comes alive on Robinhood Chain.</h2>
          <a className="button button-primary" href="#top">Return to the beginning <ArrowRight aria-hidden="true" weight="bold" /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>CYBERBUCKS</span>
        <span>Independent project. Not affiliated with Robinhood Markets, Inc.</span>
        <span>DIGITAL CURRENCY HISTORY / 1994</span>
      </div>
    </footer>
  );
}

export default function App() {
  const app = useRef(null);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const context = gsap.context(() => {
      gsap.from(".site-header", { y: -20, opacity: 0, duration: 0.7, ease: "power3.out" });
      gsap.from(".hero-copy > *", { y: 34, opacity: 0, duration: 0.9, stagger: 0.09, ease: "power3.out" });
      gsap.from(".hero-media", { x: 50, opacity: 0, duration: 1.15, delay: 0.16, ease: "power3.out" });
      gsap.from(".hero-artifact", { y: 24, opacity: 0, duration: 0.8, delay: 0.8, ease: "power3.out" });
      gsap.to(".hero-media > img", {
        rotate: 6,
        scale: 0.94,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
      });
      gsap.from(".brand-lines blockquote", {
        y: 34,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".brand-lines", start: "top 82%" },
      });

      gsap.to(".nav-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { trigger: app.current, start: "top top", end: "bottom bottom", scrub: true },
      });

      gsap.utils.toArray(".proof-card").forEach((card, index) => {
        gsap.from(card, {
          y: 44,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.06,
          ease: "power3.out",
          scrollTrigger: { trigger: ".proof-grid", start: "top 78%" },
        });
      });

      gsap.fromTo(
        ".scrub-word",
        { opacity: 0.12, y: 16 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          ease: "none",
          scrollTrigger: { trigger: ".scrub-heading", start: "top 78%", end: "bottom 38%", scrub: true },
        },
      );

      gsap.utils.toArray("[data-parallax]").forEach((element) => {
        gsap.fromTo(
          element,
          { yPercent: -4 },
          { yPercent: 4, ease: "none", scrollTrigger: { trigger: element, start: "top bottom", end: "bottom top", scrub: true } },
        );
      });

      const desktop = window.matchMedia("(min-width: 900px)").matches;
      if (desktop) {
        ScrollTrigger.create({
          trigger: ".timeline-stage",
          start: "top 10%",
          endTrigger: ".timeline-list",
          end: "bottom 88%",
          pin: ".timeline-visual",
          pinSpacing: false,
        });
      }

      gsap.utils.toArray(".timeline-entry").forEach((entry) => {
        gsap.fromTo(
          entry,
          { opacity: 0.3, y: 36 },
          { opacity: 1, y: 0, ease: "none", scrollTrigger: { trigger: entry, start: "top 82%", end: "top 45%", scrub: true } },
        );
      });

      [".evidence-stage", ".merchant-photo", ".sources-layout"].forEach((selector) => {
        gsap.from(selector, {
          y: 54,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: selector, start: "top 82%" },
        });
      });
    }, app);

    return () => context.revert();
  }, []);

  return (
    <main ref={app} className="site-shell">
      <Navigation />
      <Hero />
      <LoreMarquee />
      <BrandManifesto />
      <ProofGrid />
      <PrivacyStatement />
      <Timeline />
      <EvidenceCarousel />
      <MerchantAccordion />
      <Sources />
      <Footer />
    </main>
  );
}
