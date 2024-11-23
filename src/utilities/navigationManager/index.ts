import INavInfo from "./INavInfo";

export default ({ status, nav }: INavInfo) => {
    status?.routName && nav.navigate(status?.routName)

    // let route = mre.Dashboard

    // switch (status?.status) {
    //     case 'deleted':
    //     case 'cancel':
    //         route = mre.Dashboard
    //         break;

    //     case 'finish':
    //     case 'conclusion':
    //         route = mre.ReviewTrip
    //         break;

    //     case 'break':
    //     case 'lunch':
    //     case 'ptVisit':

    //     case 'moving':
    //         route = mre.TripTracker
    //         break;

    //     case 'inspecting':
    //     case 'loading':
    //         route = mre.SelectVehicle
    //         break;

    //     default:
    //         route = mre.Dashboard
    //         break;
    // }
    // nav.navigate(route)

}