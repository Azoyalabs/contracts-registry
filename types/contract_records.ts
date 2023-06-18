/**
 * @title Smart Contract Code ID Schema 
 */
export interface ContractRecords {
    /**
    * @title Contract code id
    */
    [x: string]: {
        /**
        * @title Project owner
        */
        owner: string;

        /**
        * @title Website link for the project
        */
        website: string;
    }


}
