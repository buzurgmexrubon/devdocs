import React from "react"

import sidebars from "@site/sidebars"
import clsx from "clsx"

function APIList(props) {
  return (
    <div {...props} className={clsx(props.className, "api-list")}>
      {sidebars.api.map((section, index) => {
        if (typeof section !== "object") return null

        return (
          <React.Fragment key={index}>
            <h4>{section.label}</h4>
            <ul>
              {section.items.map((item, idx) => {
                return (
                  item &&
                  item.replace && (
                    <li key={idx}>
                      <a href={item}>{item.replace("api/", "")}</a>
                    </li>
                  )
                )
              })}
            </ul>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default APIList
