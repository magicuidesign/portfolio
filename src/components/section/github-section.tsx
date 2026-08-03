import GitHubActivity from "@/components/github-activity"
import { DATA } from "@/data/resume"

const GITHUB_USERNAME = "udayahire2"
const GITHUB_PROFILE_URL = DATA.contact.social.GitHub.url || "https://github.com/udayahire2"

export default function GitHubSection() {
  return (
    <GitHubActivity
      username={GITHUB_USERNAME}
      label="Top contributions in:"
      showMonths
      months={12}
      className="mx-auto w-full max-w-2xl"
    />
  )
}
