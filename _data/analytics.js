export default function () {
    return {
        google: {
            id: process.env.GOOGLE_ANALYTICS_ID || null
        },
        umami: {
            url: process.env.UMAMI_ANALYTICS_URL || null, // "https://unagi.linhpham.org/script.js",
            website_id: process.env.UMAMI_ANALYTICS_WEBSITE_ID || null, // "216c796c-c342-4ff6-8910-ac9a5eab5b7d",
            domains: process.env.UMAMI_ANALYTICS_DOMAINS || null // "wwdt.me,blog.wwdt.me"
        }
    };
}
