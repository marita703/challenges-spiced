import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponent from "../components/BoxWithClassName/BoxWithStyledComponents.js";

export default function HomePage() {
  return (
    <div>
      <BoxWithStyledComponent />
      <BoxWithStyledComponent isBlack />
    </div>
  );
}
