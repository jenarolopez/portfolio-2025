import LeftColumn from "./layout/LeftColumn";
import MobileNav from "./layout/MobileNav";
import RightColumn from "./layout/RightColumn";
import Body from "./layout/Body";

export default function App() {
  return (
    <div className="bg-slate-900">
      <Body>
        <LeftColumn />
        <RightColumn />
      </Body>
    </div>
  )
}

