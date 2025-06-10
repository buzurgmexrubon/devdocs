import React from "react"
import clsx from "clsx"
import Link from "@docusaurus/Link"
import styles from "./styles.module.css"

export default function Tweet({
  url,
  handle,
  name,
  content,
  date,
  githubUsername,
}) {
  return (
    <div className={clsx("card", styles.tweet)}>
      {/* Card Header: Avatar and User Info */}
      <div className="card__header">
        <div className="avatar">
          <img
            alt={name}
            className="avatar__photo"
            // Constructs avatar URL, falling back to GitHub if X (Twitter) avatar is not available
            src={`https://unavatar.io/x/${handle}?fallback=https://github.com/${githubUsername}.png`}
            width="48"
            height="48"
            loading="lazy"
          />
          <div className={clsx("avatar__intro", styles.tweetMeta)}>
            <strong className="avatar__name">{name}</strong>
            <span>@{handle}</span>
          </div>
        </div>
      </div>

      {/* Card Body: Tweet Content */}
      <div className={clsx("card__body", styles.tweet)}>{content}</div>

      {/* Card Footer: Tweet Date with Link */}
      <div className="card__footer">
        <Link className={clsx(styles.tweetMeta, styles.tweetDate)} to={url}>
          {date}
        </Link>
      </div>
    </div>
  )
}
