import Taro, { useState, useEffect } from "@tarojs/taro";
import { View } from "@tarojs/components";

import Child from "./components/child";

function Index() {
  const [userName] = useState("mengjin");
  const [blogTitle, setBlogTitle] = useState("blogIitle");

  useEffect(() => {
    setBlogTitle(this.$router.params.blogTitle);
  }, []);
  return (
    <View>
      <Child userName={userName} />
      <View>{userName}</View>
      <View>{blogTitle}</View>
    </View>
  );
}
export default Index;
