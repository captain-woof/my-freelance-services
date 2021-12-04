export interface Gigs {
    [index: number]: Gig
}

export interface Gig {
    "gig_id": number
    "is_featured": boolean
    "cached_slug": string
    "title": string
    "seller_name": string
    "seller_id": number
    "seller_img": string
    "assets": {
        "type": "ImageAsset" | "VideoAsset"
        "cloud_img_main_gig"?: string
        "id": string
    }[]
    "attachments": {
        "id": string
        "stream_url": string
    }[],
    "buying_review_rating_count": number,
    "buying_review_rating": number,
    "gig_url": string,
    "price_i": number,
    "num_of_packages": number
}