import Taro, { useState } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtButton } from "taro-ui";

function Blog() {
  const [blogTitle, setBlogTitle] = useState("blogIitle");
  const goIndex = () => {
    Taro.navigateTo({ url: `/pages/demo/demo?blogTitle=${blogTitle}` });
  };
  return (
    <View>
      <AtButton type="primary" onClick={() => goIndex()}>
        child.
      </AtButton>
    </View>
  );
}
export default Blog;
