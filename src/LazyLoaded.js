import React, { memo } from "react";
console.log("loaded!");

export default memo(function LazyLoaded() {
  return <h1>Sooooo lazy</h1>;
});
