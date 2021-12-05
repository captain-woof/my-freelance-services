import { Gig } from "../types/gig";

export const getGigImage = (gig: Gig) => {
    const imgAssets = gig.assets.filter((gigAssets) => (gigAssets.type === 'ImageAsset'))
    return imgAssets[0].cloud_img_main_gig as string
}

export const getSeoTitleFromGig = (gig: Gig) => (
    `Hire web developer to ${gig.title}`
)