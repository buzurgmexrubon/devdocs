import Content from "@theme-original/BlogPostItem/Content"
import GiscusComments from "../../components/GiscusComments"

export default function BlogPostContentWrapper(props) {
  return (
    <>
      <Content {...props} />
      <div className="margin-top--lg">
        <GiscusComments />
      </div>
    </>
  )
}
