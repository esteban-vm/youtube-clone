declare global {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface IntrinsicElements extends React.JSX.IntrinsicElements {}
  }

  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_KEY: string
      NEXT_PUBLIC_BASE_URL: string
    }
  }
}

export {}
