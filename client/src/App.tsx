// import CodeSplitting from "./code-splitting-lazyload";
// import CallBack from "./useCallback/index";
// import Memo from "./useMemo/index";
// import { MultiSelect } from "./multi-select"
import { Provider } from "react-redux"
import { Redux } from "./redux"
import store from "./redux/store"
// import JWT from "./JWT"
// import OTP from "./otp"
// import Pagination from "./pagination"


function App() {
  return (
    <>
      {/* <CallBack/> */}
      {/* <Memo/> */}
      {/* <CodeSplitting/> */}
      {/* <MultiSelect/> */}
      <Provider store={store}>
        <Redux/>
      </Provider>
      {/* <JWT/> */}
      {/* <OTP/> */}
      {/* <Pagination/> */}
    </>
  )
}

export default App
