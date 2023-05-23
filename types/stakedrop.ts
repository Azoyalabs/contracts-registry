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
