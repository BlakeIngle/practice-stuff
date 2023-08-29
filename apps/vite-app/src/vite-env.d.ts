/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SHOW_QUERY_DEVTOOLS: string
  readonly VITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
