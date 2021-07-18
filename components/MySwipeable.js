import Swipeable from "react-native-gesture-handler/Swipeable";

export default class MySwipeable extends Swipeable {
  // removes close delay from standard close mthod on Swipeable
  close = () => {
    const { dragX, rowTranslation } = this.state;
    dragX.setValue(0);
    rowTranslation.setValue(0);
    this.setState({ rowState: Math.sign(0) });
  };
}
