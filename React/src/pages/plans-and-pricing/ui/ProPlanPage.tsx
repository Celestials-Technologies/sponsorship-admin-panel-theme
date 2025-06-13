
import CustomDiv from '@/shared/ui/CustomDiv'
import UpgradeHeader from './UpgradeHeader'
import { UpgradePlans } from './UpgradePlans'
import { currentFeatures, newFeatures } from "../model/Plans"

export function ProPlanPage({ onClose }) {
    return (

        <>
            <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center backdrop-blur-xs bg-black/10">
                <div className="text-center text-white pt-30 pb-10">
                    <h2 className='text-primary text-[29.6px] Gilroy-bold'>Confirm Pro Plan</h2>

                    <CustomDiv style="max-w-[581px] !p-0 mx-auto text-center !rounded-[16px] mx-auto mt-6 ">
                        <UpgradeHeader onClose={onClose} />
                        <UpgradePlans currentFeature={currentFeatures} newFeature={newFeatures} price={"426"} newPrice={"416"} />
                    </CustomDiv>
                </div>
            </div>
        </>
    )
}
