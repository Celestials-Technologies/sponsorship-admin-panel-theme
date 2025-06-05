import { useFetchDocuments } from "@/widgets/table/api/useFetchDocuments";
import CustomDiv from "@/shared/ui/CustomDiv";
import { Link } from "react-router-dom";
import { Error } from "@/shared/ui/Error";
import { Loader } from "@/shared/ui/Loader";


export function SponsorshipTable({ heading, count }) {
    const { documents, isFetching, error } = useFetchDocuments()
    if (count === "all") {
        count = documents.length
    }
    const visibleDocuments = documents.slice(0, +count);


    return (
        <div className="pt-12">
            <p className="text-xl sm:text-2xl lg:text-3xl text-white mb-5 Gilroy-black">{heading}</p>

            <CustomDiv>
                <p className="text-xl  text-white Gilroy-semibold">All Filles</p>
                <div className="xl:overflow-hidden overflow-auto">
                    {(error && <Error message={error.message} />)}
                    {(!isFetching && visibleDocuments.length === 0) && <p className="text-white font-bold p-2 border-2 border-primary">You currently have no Documents to show here!</p>}
                    {isFetching && <Loader message="Loading Documents..." />}
                    <table className="border-separate border-spacing-y-[15px] max-w-[400px]">
                        <thead className="text-xl leading-4 text-primary text-left Gilroy-medium">
                            <tr className="">
                                <th className="xl:w-[600px] xl:min-w-[600px] w-[184px] min-w-[184px] px-6">
                                    Download Sponsors
                                </th>
                                <th className="xl:w-[600px] xl:min-w-[600px] w-[184px] min-w-[184px] px-6">
                                    Date
                                </th>
                            </tr>
                        </thead>
                        {(!isFetching && visibleDocuments.length > 0) && <tbody className="Gilroy-normal">
                            {visibleDocuments.map(doc => (
                                <tr key={doc.title} className="h-8 bg-[#302964]">
                                    <td className="text-base md:text-lg text-[#cac4c4] rounded-l-3xl py-[21px] px-6">
                                        {doc.title}
                                    </td>
                                    <td className="text-base md:text-lg text-[#cac4c4] rounded-r-3xl py-[21px] px-6">
                                        {doc.date}
                                    </td>
                                </tr>
                            ))}
                        </tbody>}
                    </table>
                </div>
                <p className="text-xl leading-7 text-white mb-[11px] Gilroy-medium">This content is for Pro plan & Enterprise members only</p>
                <p className="text-xl leading-7 text-white mb-0 Gilroy-medium">Please <Link to="/" className="text-primary underline">Click Here</Link> to gain access</p>
            </CustomDiv>
        </div >

    );
}
