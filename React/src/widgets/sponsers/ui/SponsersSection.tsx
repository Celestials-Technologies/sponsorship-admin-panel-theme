import React from 'react'
import { useFetchPartners } from '../api/useFetchPartners'
import { Error } from '@/shared/ui/Error'
import { Loader } from '@/shared/ui/Loader'
import { SponserCard } from '@/shared/ui/SponserCard'

export default function SponsersSection() {
    const { partners, isFetching, error } = useFetchPartners()


    return (
        <>
            {(error && <Error message={error.message} />)}
            {isFetching && <Loader message="Loading Partners..." />}
            {(!isFetching && partners.length === 0) && <p className="text-white font-bold p-2 border-2 border-primary">You currently have no Partners to show here!</p>}
            {(!isFetching && partners.length > 0) && <div className="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-5 justify-items-center max-w-[1330px] mx-auto">
                {partners.map(sponser => (
                    <SponserCard
                        key={sponser?.name}
                        sponser={sponser} />
                ))}
            </div>}
        </>
    )
}
