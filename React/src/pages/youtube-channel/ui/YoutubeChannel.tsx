import { YoutubeInputForm } from './YoutubeInputForm'

export function YoutubeChannel() {
    return (
        <div className="pt-12 max-w-[1300px] mx-auto text-white">
            <p className="text-2xl lg:text-3xl leading-[33px] md:leading-[43px] mb-2 Gilroy-black">
                Suggest Youtube Channels
            </p>
            <p className="text-[15px] leading-[19px] Gilroy-normal capitalize">
                Suggest a YouTube channel you'd like us to track and stay updated on. Simply provide the channel's name, URL, and category.
            </p>
            <YoutubeInputForm />
        </div>
    )
}
