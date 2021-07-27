/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  _id: (id: string | number) => ({
    $url: (url?: { hash?: string }) => ({ pathname: '/[id]' as const, query: { id }, hash: url?.hash })
  }),
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath

// prettier-ignore
export const staticPath = {
  favicon_ico: '/favicon.ico',
  vercel_svg: '/vercel.svg'
} as const

// prettier-ignore
export type StaticPath = typeof staticPath
