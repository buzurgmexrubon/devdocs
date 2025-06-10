import clsx from "clsx"
import Translate from "@docusaurus/Translate"
import Link from "@docusaurus/Link"
import Heading from "@theme/Heading"

const Playgrounds = [
  {
    name: "📦 CodeSandbox",
    image: require("@site/static/img/playgrounds/codesandbox.png"),
    url: "https://docusaurus.new/codesandbox",
    urlTS: "https://docusaurus.new/codesandbox-ts",
    description: (
      <>
        CodeSandbox is an online code editor and development environment that
        allows developers to create, share and collaborate on web development
        projects in a browser-based environment
      </>
    ),
  },
  {
    name: "⚡ StackBlitz 🆕",
    image: require("@site/static/img/playgrounds/stackblitz.png"),
    url: "https://docusaurus.new/stackblitz",
    urlTS: "https://docusaurus.new/stackblitz-ts",
    description: (
      <>
        StackBlitz uses a novel{" "}
        <Link href="https://blog.stackblitz.com/posts/introducing-webcontainers/">
          WebContainers
        </Link>{" "}
        technology to run Docusaurus directly in your browser.
      </>
    ),
  },
]

function PlaygroundCard({ name, image, url, urlTS, description }) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={clsx("card")}>
        <div className={clsx("card__image")}>
          <Link to={url}>
            <img src={image.default} alt={`${name}'s image`} />
          </Link>
        </div>
        <div className="card__body">
          <Heading as="h3">{name}</Heading>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <div style={{ textAlign: "center" }}>
            <b>
              <Translate id="playground.tryItButton">Try it now!</Translate>
            </b>
          </div>
          <div className="button-group button-group--block">
            <Link className="button button--secondary" to={url}>
              JavaScript
            </Link>
            <Link className="button button--secondary" to={urlTS}>
              TypeScript
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PlaygroundCardsRow() {
  return (
    <div className="row">
      {Playgrounds.map((playground) => (
        <PlaygroundCard key={playground.name} {...playground} />
      ))}
    </div>
  )
}
