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
