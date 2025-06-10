import React from "react"
import clsx from "clsx"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import styles from "./index.module.css"

function Feature({ title, description, link }) {
  const handleMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    card.style.setProperty("--mouse-x", `${x}%`)
    card.style.setProperty("--mouse-y", `${y}%`)
  }

  const handleMouseLeave = (e) => {
    const card = e.currentTarget
    card.style.removeProperty("--mouse-x")
    card.style.removeProperty("--mouse-y")
  }

  return (
    <div
      className="col col--4"
      style={{ height: "100%", paddingBottom: "20px" }}
    >
      <div
        className={clsx("card", styles.featureCard)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card__header">
          <h3>{title}</h3>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <Link
            className="button button--outline button--primary button--sm"
            to={link}
          >
            Batafsil →
          </Link>
        </div>
      </div>
    </div>
  )
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <Feature
            title="Docusaurus"
            description="Endi dokumentatsiya haqida o'ylashga hojat yo'q"
            link="/docs/docusaurus"
          />
          <Feature
            title="HTML"
            description="Veb sahifalarni yaratish uchun asosiy belgilash tili. Strukturani yaratishni o‘rganing."
            link="/docs/html"
          />
          <Feature
            title="CSS"
            description="Sahifangizni bezashni, moslashuvchan dizaynlar yaratishni o‘rganing."
            link="/docs/css"
          />
          <Feature
            title="JavaScript"
            description="Veb sahifalaringizga interaktivlik qo‘shing va dinamik funktsiyalar yarating."
            link="/docs/js"
          />
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title} – HTML, CSS, JavaScript o‘zbek tilida`}
      description="O‘zbek tilida HTML, CSS va JavaScript bo‘yicha zamonaviy dokumentatsiya va darsliklar. Dasturlashni oson va tushunarli o‘rganing."
    >
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
