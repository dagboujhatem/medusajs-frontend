import Aseel from "../components/aseel"
import Campaigns from "../components/campaigns"
import Donate from "../components/donate"
import MobileApp from "../components/mobile-apps"
import Packages from "../components/packages"
import RealTime from "../components/real-time"
import TopMenu from "../components/top-menu"



const EmergencyTemplate = () => {
    return (
        <div className="flex-1 small:py-12 small:bg-gray-50">
            <TopMenu/>
            <Packages/>
            <Donate/>
            <Campaigns/>
            <RealTime/>
            <Aseel/>
            <MobileApp/>
        </div>
    )
}

export default EmergencyTemplate