import InfoForm from './InfoForm'
import PasswordForm from './PasswordForm'
import { NeedAssistance } from './NeedAssistance'

export default function AccountSection() {
    return (
        <>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
                <InfoForm />
                <PasswordForm />
            </div>
            <NeedAssistance />
        </>
    )
}
