import Taro, { useState } from "@tarojs/taro";
import { View } from "@tarojs/components";

function Child(props) {
  return (
    <View>
      <View>child.</View>
      <View>{props.userName}</View>
    </View>
  );
}
export default Child;
