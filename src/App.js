import LeftColumn from "./components/LeftColumn";
import MobileNav from "./components/MobileNav";
import RightColumn from "./components/RightColumn";
import Body from "./layout/Body";

export default function App() {
  return (
    <div>
      <Body>
        <MobileNav />
        <LeftColumn />
        <RightColumn />
      </Body>
    </div>
  )
}

