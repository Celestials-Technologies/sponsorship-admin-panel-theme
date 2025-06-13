import { useState } from 'react'
import { Button } from '@/shared/ui/Button'
import AccountIcon from "./AccountIcon"
import BillingIcon from "./BillingIcon"
import AccountSection from './AccountSection'
import BillingSection from './BillingSection'

export function Account() {
    const [activeSection, setActiveSection] = useState("account")
    return (
        <div className="max-w-[1300px] mx-auto">
            <div className="flex gap-5 pt-[25px] mb-8">
                <Button
                    onClick={() => setActiveSection('account')}
                    variant='secondary'
                    className={`text-base text-white border border-white hover:bg-transparent rounded-xl w-[148px] h-[45px]
                                 ${activeSection === 'account' ? 'bg-primary border-none hover:bg-primary' : 'bg-transparent'}`}
                    icon={<AccountIcon />}
                    label="Account"
                />
                <Button
                    onClick={() => setActiveSection('billing')}
                    variant='secondary'
                    className={`text-base text-white border border-white rounded-xl w-[148px] h-[45px] 
                            ${activeSection === 'billing' ? 'bg-primary border-none hover:bg-primary' :
                            'bg-gradient-to-r from-[#261A7E] to-[#191155] '}`}
                    icon={<BillingIcon />}
                    label="Billing"
                />
            </div>

            {activeSection === 'account' && <AccountSection />}
            {activeSection === 'billing' && <BillingSection />}
        </div>
    )
}
