import React from "react"
import clsx from "clsx"
import Link from "@docusaurus/Link"
import styles from "./styles.module.css"

export default function TweetQuote({ url, handle, name, job, children }) {
  const avatar = `https://unavatar.io/x/${handle}`
  const profileUrl = `https://x.com/${handle}`

  return (
    <figure className={styles.tweetQuote}>
      <blockquote>
        {/* The quote content, linked to the source URL */}
        <Link to={url}>{children}</Link>
      </blockquote>
      <figcaption>
        {/* Profile link for the quoted person */}
        <Link to={profileUrl} rel="nofollow">
          <div className="avatar">
            <img
              alt={name}
              className={clsx("avatar__photo", styles.avatarImg)}
              src={avatar}
              // loading="lazy" // Commented out as it was in the original and might not be needed
            />
            <div className={clsx("avatar__intro")}>
              <strong className="avatar__name">
                <cite>{name}</cite> {/* Name of the quoted person */}
              </strong>
              <small className="avatar__subtitle" itemProp="description">
                {job} {/* Job title or description */}
              </small>
            </div>
          </div>
        </Link>
      </figcaption>
    </figure>
  )
}
