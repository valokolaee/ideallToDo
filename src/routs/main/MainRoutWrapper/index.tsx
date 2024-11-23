import MyGlobalContextProvider from "../../../context/MyGlobalContextProvider"
import MainRouter from "../../../navigation/mainRouter"

export default () => (
    <MyGlobalContextProvider>
        <MainRouter />
    </MyGlobalContextProvider>
)
