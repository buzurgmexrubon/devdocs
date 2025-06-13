import clsx from "clsx"
import Link from "@docusaurus/Link"
import useBaseUrl from "@docusaurus/useBaseUrl"

import styles from "./styles.module.css" // CSS Modules style'larini import qilamiz

function DocsCard(props) {
  const isStatic = typeof props.href === "undefined"
  const isOutbound =
    typeof props.href !== "undefined" ? /^http/.test(props.href) : false

  // Header prop'ini to'g'ri tekshiramiz va CSS Modules klassini ishlatamiz
  const header =
    props.header === undefined ? null : (
      <header className={styles.CardHeader}>{props.header}</header>
    )

  const content = (
    <>
      {/* Img prop'i bo'lsa rasmni ko'rsatamiz */}
      {props.img && (
        <img src={useBaseUrl(props.img)} className={styles.CardImage} />
      )}

      {/* Asosiy kontent konteyneri */}
      <div className={styles.CardContainer}>
        {/* Faqat icon prop'i berilgan bo'lsa iconni ko'rsatamiz */}
        {props.icon && (
          <div className={styles.CardIconRow}>
            <img
              src={useBaseUrl(props.icon)}
              className={styles.CardIcon} // Faqat asosiy ikon klassini ishlatamiz
            />
          </div>
        )}

        {/* Ionicon prop'i bo'lsa ion-iconni ko'rsatamiz */}
        {props.ionicon && (
          <ion-icon
            name={props.ionicon}
            className={styles.CardIonicon}
          ></ion-icon>
        )}

        {/* Iconset prop'i bo'lsa bir nechta ikonni ko'rsatamiz */}
        {props.iconset && (
          <div className={styles.CardIconsetContainer}>
            {props.iconset.split(",").map((icon, index) => (
              <img
                src={useBaseUrl(icon)}
                className={clsx(
                  styles.CardIcon,
                  index === props.activeIndex ? styles.CardIconActive : ""
                )}
                data-index={index}
                key={index}
              />
            ))}
          </div>
        )}

        {/* Header va children (paragraf) */}
        {props.header && header}
        <div className={styles.CardContent}>{props.children}</div>
      </div>
    </>
  )

  // Komponentning asosiy klasslarini dinamik ravishda aniqlaymiz
  const className = clsx(
    {
      [styles.CardWithImage]: typeof props.img !== "undefined",
      [styles.CardWithoutImage]: typeof props.img === "undefined",
      [styles.CardSizeLg]: props.size === "lg",
    },
    props.className // Agar qo'shimcha klasslar berilgan bo'lsa
  )

  // Komponentni Link, A yoki oddiy div sifatida render qilish
  if (isStatic) {
    return (
      <docs-card className={className}>
        <div className={clsx(styles.card, "docs-card")}>{content}</div>
      </docs-card>
    )
  }

  if (isOutbound) {
    return (
      <docs-card className={className}>
        <a
          className={clsx(styles.card, "docs-card")}
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      </docs-card>
    )
  }

  return (
    <docs-card className={className}>
      <Link to={props.href} className={clsx(styles.card, "docs-card")}>
        {content}
      </Link>
    </docs-card>
  )
}

export default DocsCard
