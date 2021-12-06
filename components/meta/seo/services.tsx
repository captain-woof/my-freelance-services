import Head from 'next/head'

export default function ServicesSeo() {
    return (
        <Head>
            <title>Web Developer Freelancer for Hire</title>
            <meta name="title" content="Web Developer Freelancer for Hire" />
            <meta name="description" content="I am a web developer freelancer for hire. These are the services I provide. Need your business website, online portfolio, or some custom website built? Contact me." />
            <meta name="keywords" content="hire web developer, hire web developer freelance, create business website, online portfolio website, create brand website" />
            <meta name="author" content="Sohail Saha" />
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Web Developer Freelancer for Hire" />
            <meta property="og:description" content="I am a web developer freelancer for hire. These are the services I provide. Need your business website, online portfolio, or some custom website built? Contact me." />
            <meta property="og:image" content={`${process.env.NEXT_PUBLIC_APP_ORIGIN}/assets/images/banner.png`} />
            <meta property="og:url" content={process.env.NEXT_PUBLIC_APP_ORIGIN} />
            <meta property="og:site_name" content="Web Developer Freelancer for Hire & Blog" />
            <meta name="twitter:title" content="Web Developer Freelancer for Hire" />
            <meta name="twitter:description" content="I am a web developer freelancer for hire. These are the services I provide. Need your business website, online portfolio, or some custom website built? Contact me." />
            <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_APP_ORIGIN}/assets/images/banner.png`} />
            <meta name="twitter:image:alt" content="Web Developer Freelancer for Hire" />
            <meta name="twitter:site" content="@realCaptainWoof" />
            <meta name="twitter:creator" content="@realCaptainWoof" />
        </Head>
    )
}