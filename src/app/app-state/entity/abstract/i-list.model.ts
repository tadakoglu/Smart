/* http://json2ts.com/ used for JSON TO TS models */
/* Interface can be type-safe initiated like officeData: IOffice= <IOffice>{}; or */

import { IGeocode } from "./i-geocode.model";


export interface IAgentInfo {
    accountID: number;
    firstname: string;
    lastname: string;
    company: string;
    splashMessage: string;
    customHeader: string;
}

export interface IFloorplan {
    bedrooms: number;
    type: string;
    price: number;
}

export interface IRecord {
    listID: number;
    order: number;
    propertyID: number;
    name: string;
    streetAddress: string;
    city: string;
    state: string;
    pets: boolean;
    washerDry: string;
    photo: string;
    favorite: boolean;
    highestSentCommissions: number;
    onsiteManager?: any;
    management?: any;
    proximity: number;
    section8: boolean;
    seniorHousing: boolean;
    studentHousting: boolean;
    floorplans: IFloorplan[];
    highValueAmenities: string[];
    paidUtilities: string[];
    geocode: IGeocode;
}

export interface IListFilter {
    maxPrice: number;
    roomCounts: number[];
    isFavorite: boolean;
}

/* Root model, the rest are helper models */
export interface IList {
    agentInfo: IAgentInfo;
    records: IRecord[];
    showContactInfo: boolean;
    role: string;
    title: string;
    body: string;
}


