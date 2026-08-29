# Image asset inventory

Production image paths used by the landing page. Source photography provenance remains in `content/media.ts`.

| File | Public path | Landing section | Format | Dimensions | Migration |
| --- | --- | --- | --- | --- | --- |
| `hero.webp` | `/public/images/hero/hero.webp` | Hero | WebP | 1800 × 1201 | Converted from JPEG and optimized at quality 88 |
| `spring.webp` | `/public/images/seasons/spring.webp` | Seasonal Experience — Spring | WebP | 1800 × 2700 | Converted from JPEG and optimized at quality 88 |
| `summer.webp` | `/public/images/seasons/summer.webp` | Seasonal Experience — Summer | WebP | 1800 × 1349 | Converted from JPEG and optimized at quality 88 |
| `fall.webp` | `/public/images/seasons/fall.webp` | Seasonal Experience — Fall | WebP | 1800 × 2700 | Converted from JPEG and optimized at quality 88 |
| `winter.webp` | `/public/images/seasons/winter.webp` | Seasonal Experience — Winter | WebP | 1800 × 1205 | Converted from JPEG and optimized at quality 88 |
| `lawn-care.webp` | `/public/images/services/lawn-care.webp` | Property Care / Services | WebP | 1800 × 1227 | Converted from JPEG and optimized at quality 88 |
| `garden-care.webp` | `/public/images/services/garden-care.webp` | Property Care / Services | WebP | 1800 × 1200 | Converted from JPEG and optimized at quality 88 |
| `about.webp` | `/public/images/about/about.webp` | About Us | WebP | 1800 × 1200 | Converted from JPEG and optimized at quality 88 |
| `team.webp` | `/public/images/team/team.webp` | The Team | WebP | 1800 × 1200 | Converted from JPEG and optimized at quality 88 |
| `lawn-care.webp` | `/public/images/work/lawn-care.webp` | Real Work / Proof | WebP | 1800 × 1202 | Converted from JPEG and optimized at quality 88 |
| `garden-care.webp` | `/public/images/work/garden-care.webp` | Real Work / Proof | WebP | 1800 × 2700 | Converted from JPEG and optimized at quality 88 |
| `commercial-property.webp` | `/public/images/commercial/commercial-property.webp` | Commercial / Priority | WebP | 1800 × 1200 | Converted from JPEG and optimized at quality 88 |
| `snow-removal.webp` | `/public/images/snow/snow-removal.webp` | Snow | WebP | 1800 × 1200 | Converted from JPEG and optimized at quality 88 |

## Final folder tree

```text
public/
└── images/
    ├── about/
    │   └── about.webp
    ├── commercial/
    │   └── commercial-property.webp
    ├── hero/
    │   └── hero.webp
    ├── seasons/
    │   ├── fall.webp
    │   ├── spring.webp
    │   ├── summer.webp
    │   └── winter.webp
    ├── services/
    │   ├── garden-care.webp
    │   └── lawn-care.webp
    ├── snow/
    │   └── snow-removal.webp
    ├── team/
    │   └── team.webp
    └── work/
        ├── garden-care.webp
        └── lawn-care.webp
```

## Migration map

| Before | After |
| --- | --- |
| `public/garitas-temp/hero/hero-temp-01.jpg` | `public/images/hero/hero.webp` |
| `public/garitas-temp/seasons/spring-temp-01.jpg` | `public/images/seasons/spring.webp` |
| `public/garitas-temp/seasons/summer-temp-01.jpg` | `public/images/seasons/summer.webp` |
| `public/garitas-temp/seasons/fall-temp-01.jpg` | `public/images/seasons/fall.webp` |
| `public/garitas-temp/seasons/winter-temp-01.jpg` | `public/images/seasons/winter.webp` |
| `public/garitas-temp/services/services-temp-01.jpg` | `public/images/services/lawn-care.webp` |
| `public/garitas-temp/services/services-temp-02.jpg` | `public/images/services/garden-care.webp` |
| `public/garitas-temp/about/about-temp-01.jpg` | `public/images/about/about.webp` |
| `public/garitas-temp/team/team-temp-01.jpg` | `public/images/team/team.webp` |
| `public/garitas-temp/work/work-temp-01.jpg` | `public/images/work/lawn-care.webp` |
| `public/garitas-temp/work/work-temp-02.jpg` | `public/images/work/garden-care.webp` |
| `public/garitas-temp/commercial/commercial-temp-01.jpg` | `public/images/commercial/commercial-property.webp` |
| `public/garitas-temp/snow/snow-temp-01.jpg` | `public/images/snow/snow-removal.webp` |
