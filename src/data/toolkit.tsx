import { IToolkitItem } from "@/types"

export const TYPES = {
    LANGUAGE: 'language',
    FRAMEWORK: 'framework'
}

export const toolKitItems : IToolkitItem[] = [
    {
        "id": 0,
        "name": "C#",
        "logo_url": "/toolkit/csharp-logo.svg",
        "type": TYPES.LANGUAGE,
        "level": 2,
        "years": 2
    },
    {
        "id": 1,
        "name": ".NET",
        "logo_url": "/toolkit/dotnet-logo.png",
        "type": TYPES.FRAMEWORK,
        "level": 2,
        "years": 2
    },
    {
        "id": 2,
        "name": "JS",
        "logo_url": "/toolkit/js-logo.png",
        "type": TYPES.LANGUAGE,
        "level": 3,
        "years": 5
    },
    {
        "id": 3,
        "name": "Laravel",
        "logo_url": "/toolkit/laravel-logo.png",
        "type": TYPES.FRAMEWORK,
        "level": 3,
        "years": 3
    },
    {
        "id": 4,
        "name": "Next.js",
        "logo_url": "/toolkit/nextjs-logo.svg",
        "type": TYPES.FRAMEWORK,
        "level": 3,
        "years": 2
    },
    {
        "id": 5,
        "name": "PHP",
        "logo_url": "/toolkit/php-logo-2.png",
        "type": TYPES.LANGUAGE,
        "level": 4,
        "years": 4
    },
    {
        "id": 6,
        "name": "Python",
        "logo_url": "/toolkit/python-logo.png",
        "type": TYPES.LANGUAGE,
        "level": 1,
        "years": 1
    },
    {
        "id": 7,
        "name": "Vue.js",
        "logo_url": "/toolkit/vuejs-logo.png",
        "type": TYPES.FRAMEWORK,
        "level": 3,
        "years": 3
    },
    {
        "id": 8,
        "name": "Wordpress",
        "logo_url": "/toolkit/wp-logo.png",
        "type": TYPES.FRAMEWORK,
        "level": 3,
        "years": 2
    },
    {
        "id": 9,
        "name": "SQL",
        "logo_url": "/toolkit/sql-logo.svg",
        "type": TYPES.LANGUAGE,
        "level": 4,
        "years": 5
    }
    // {
    //     "id": 9,
    //     "name": "Dcoker",
    //     "logo_url": "/toolkit/wp-logo.svg",
    //     "type": "tool",
    //     "level": 3
    // }
]