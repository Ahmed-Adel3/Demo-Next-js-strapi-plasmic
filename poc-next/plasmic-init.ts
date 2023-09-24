import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "nCYdrPreWy1Y9vibrND8zs",  // ID of a project you are using
      token: "cHoDpRBxOpy0n1nJRyWqWl2kEt0Ybf70ZyTykY3sOVpmzeS6G6CT7TPvUmuowRkmOBc2LGv7mKtfW7wTelmg"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})