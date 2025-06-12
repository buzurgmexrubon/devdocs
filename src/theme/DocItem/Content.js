import Content from "@theme-original/DocItem/Content"
import GiscusComments from "../../components/GiscusComments"

export default function ContentWrapper(props) {
  return (
    <>
      <Content {...props} />
      <div className="margin-top--lg">
        <GiscusComments />
      </div>
    </>
  )
}
