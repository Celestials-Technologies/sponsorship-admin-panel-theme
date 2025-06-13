import ConnectSponsersLogo from '@/shared/ui/ConnectSponsersLogo'
import UpgradeIcon from './UpgradeIcon'
import CrossIcon from '@/shared/ui/CrossIcon'
import { Button } from '@/shared/ui/Button'

export default function UpgradeHeader({ onClose }) {
    return (
        <div className="pt-[15px] pb-[26px] px-[15px] border-b border-white relative">
            <Button variant={"ghost"} type="button" className="absolute top-3 right-3 hover:bg-transparent"
                icon={<CrossIcon color="white" size="40" />} onClick={() => onClose(undefined)} />
            <ConnectSponsersLogo className='text-[30px] md:text-[40px] lg:text-[47px] mt-5 Gilroy-bold' />
            <div className="my-2 ">
                <UpgradeIcon className="mx-auto" />
            </div>
            <p className="text-[26px] leading-8 Gilroy-extrabold text-white text-center capitalize mt-1 mb-2.5">
                upgrade Now For More Better Faster
            </p>
            <p className="text-[13px] leading-5 Gilroy-normal text-white text-center capitalize max-w-[420px] mx-auto">
                Upgrade now to more credits, brands, and users; achieve <span className="text-primary">better results</span>
                ; and receive <span className="text-primary">faster support</span>
            </p>
        </div>)
}
