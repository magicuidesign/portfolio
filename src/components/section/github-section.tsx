import { Suspense } from "react"

import {
  GitHubContributions,
  GitHubContributionsFallback,
} from "@/components/github-contributions"
import { getCachedContributions } from "@/components/github-contributions/lib/get-cached-contributions"
import { DATA } from "@/data/resume"

const GITHUB_USERNAME = "udayahire2"
const GITHUB_PROFILE_URL = DATA.contact.social.GitHub.url || "https://github.com/udayahire2"

export default function GitHubSection() {
  const contributions = getCachedContributions(GITHUB_USERNAME)

  return (
    <Suspense fallback={<GitHubContributionsFallback />}>
      <GitHubContributions
        contributions={contributions}
        githubProfileUrl={GITHUB_PROFILE_URL}
        username={GITHUB_USERNAME}
      />
    </Suspense>
  )
}
