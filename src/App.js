import LeftColumn from "./components/LeftColumn";
import MobileNav from "./components/MobileNav";
import RightColumn from "./components/RightColumn";
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

