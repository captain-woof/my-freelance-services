import Services from "../components/pages/services";
import { InferGetStaticPropsType, GetStaticPropsContext } from 'next'
import { Gigs } from "../types/gig";

export const getStaticProps = async (ctx: GetStaticPropsContext) => {

    const myGigs = await (await fetch(`https://fiverr-api.vercel.app/${process.env.NEXT_PUBLIC_FIVERR_USERNAME}/gigs`)).json() as Gigs

    return ({
        props: {
            myGigs
        },
        revalidate: 60
    })
}

export default function ServicesPage({ myGigs }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Services myGigs={myGigs}/>
    )
}