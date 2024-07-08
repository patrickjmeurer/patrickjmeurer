import 'next'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      LINKEDIN_URL: string
      GITHUB_URL: string
      GITLAB_URL: string
      EMAIL: string
    }
  }
}
