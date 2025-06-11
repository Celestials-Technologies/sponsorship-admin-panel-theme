import { useState } from 'react'
import { Button } from '@/shared/ui/Button'
import ConnectSponsersLogo from '@/shared/ui/ConnectSponsersLogo'
import CustomDiv from '@/shared/ui/CustomDiv'
import EditIcons from "./EditIcons"
import FacebookIcon from "./FacebookIcon"
import PintrestIcon from "./PintrestIcon"
import TwitterIcon from "./TwitterIcon"
import LinkedienIcon from "./LinkedienIcon"
import { handleCopy } from '../api/handleCopy'

export default function AffiliateLink() {
    const [copied, setCopied] = useState(false);
    const affiliateLink = "https://Getsponsored.ai.com/c/YTVS49";

    return (
        <div className="w-full max-w-[534px] mx-auto">
            <CustomDiv style="!px-0">
                <div className="max-w-sm mx-auto">
                    <ConnectSponsersLogo className="text-[25px] sm:text-[35px] leading-7 mx-auto  mb-4" />
                    <p className="text-lg leading-7 text-white text-center Gilroy-semibold capitalize mb-1">
                        Give 50% Off Year 1, Earn 50% Commissions for Life—Double After Year 1!
                    </p>
                </div>
                <div className="bg-sideBarBg pt-2.5 pb-[18px]">
                    {/* ...rest of your content... */}
                </div>
                <div className="px-4 pt-4 pb-[25px] mt-[5px]">
                    <p className="text-xl leading-[26px] text-white text-center capitalize mb-[9px] Gilroy-semibold">Your affiliate link</p>
                    <div className="flex justify-center items-center flex-wrap gap-[15px] pr-[11px]">
                        <div className="bg-white rounded-xl border border-[#d0d0d0] w-full max-w-[339px] h-[45px] py-2.5 px-[11px]">
                            <a href={affiliateLink} className="text-[11px] leading-6 opacity-40 Gilroy-medium">{affiliateLink}</a>
                        </div>
                        <div className="flex justify-center items-center gap-2.5">
                            <Button
                                label={copied ? "Copied!" : "Copy"}
                                className="p-5 w-20 border border-gray-300"
                                onClick={() => handleCopy(affiliateLink, setCopied)}
                            />
                            <Button
                                variant="ghost"
                                className="hover:bg-transparent"
                                size="sm"
                                icon={<EditIcons />}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-8 mt-[18px]">
                        <a href="/" target="_blank">
                            <FacebookIcon />
                        </a>
                        <a href="/" target="_blank">
                            <PintrestIcon />
                        </a>
                        <a href="/" target="_blank">
                            <TwitterIcon />
                        </a>
                        <a href="/" target="_blank">
                            <LinkedienIcon />
                        </a>
                    </div>
                </div>
            </CustomDiv>
        </div>
    );
}
