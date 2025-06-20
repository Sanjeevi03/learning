import CodeSplitting from "./code-splitting-lazyload";
import CallBack from "./useCallback/index";
import Memo from "./useCallback/useMemo";
import { MultiSelect } from "./multi-select"
import { Provider } from "react-redux"
import { Redux } from "./redux"
import store from "./redux/store"
import JWT from "./JWT"
import React, { useEffect, useRef, useState } from "react";
import OTP from "./otp"
import Pagination from "./pagination"


function App() {
  console.log('red')
  return (
    <>
      {/* <CallBack/> */}
      {/* <Memo/> */}
      {/* <CodeSplitting/> */}
      <MultiSelect/>
      {/* <Provider store={store}>
        <Redux/>
      </Provider> */}
      {/* <JWT/> */}
      {/* <OTP/> */}
      {/* <Pagination/> */}

        {/* <span>
      {dimensions.width} x {dimensions.height}
    </span>
    <div>
      <input defaultValue={"Won't focus"} />
      <input ref={inputElRef} defaultValue={"Will focus"} />
    </div> */}

    </>
  )
}

// <h1>sanjeevi <span>sam</span> </h1>
export default App
