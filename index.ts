// Read all files from "drops" folder using webpack
// and create a mapping of names - drops
function requireAll(requireContext: any) {
  const keys = requireContext.keys();
  const values = keys.map(requireContext);
  const registry: { [chain: string]: Stakedrop } = {};

  for (let i = 0; i < keys.length; i++) {
    const addressWithoutExtension = keys[i].split(".json")[0];
    const addressWithoutSlashes = addressWithoutExtension.split("/");
    const address = addressWithoutSlashes[addressWithoutSlashes.length - 1];

    registry[address] = values[i];
  }

  return registry;
}

const registry: { [key: string]: Stakedrop } = requireAll(
  require.context("./drops", false, /.json$/)
);

/**
 * @title Fetchstation Stakedrop Schema
 */
export interface Stakedrop {
  /**
   * @title Project name
   */
  name: string;

  /**
   * @title Website link for the project
   */
  website: string;

  /**
   * @title Link to the project's logo
   */
  logo: string;

  /**
   * @title Short description of the project
   */
  description: string;

  /**
   * @title Start date for the drop
   */
  start?: Date;

  /**
   * @title End date for the drop
   */
  ends: Date;

  /**
   * @title Claim link for the project
   */
  claim: string;

  socials?: {
    /**
     * @title Telegram link for the project
     */
    twitter?: string;

    /**
     * @title Github link for the project
     */
    github?: string;

    /**
     * @title Telegram link for the project
     */
    telegram?: string;
  };
  type: "project" | "blockchain";
}

export function getRegistry() {
  return registry;
}

/**
 * @param slug lowercase project name slug. ex: "my-cool-project"
 */
export function getDrop(slug: string): Stakedrop | null {
  const registryDrops = registry[slug];
  return registryDrops ?? null;
}
