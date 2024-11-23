import { CompositeNavigationProp, useNavigation } from "@react-navigation/native"

export default () => {
    const nav = useNavigation<CompositeNavigationProp<any, any>>()
    return nav
}
