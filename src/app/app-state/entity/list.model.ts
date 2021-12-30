/* http://json2ts.com/ used for JSON TO TS models */
/* Interface can be type-safe initiated like officeData: IOffice= <IOffice>{}; or */

import { Geocode } from "./geocode.model";

export interface AgentInfo {
    accountID: number;
    firstname: string;
    lastname: string;
    company: string;
    splashMessage: string;
    customHeader: string;
}

export interface Floorplan {
    bedrooms: number;
    type: string;
    price: number;
}

export interface Record {
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
    floorplans: Floorplan[];
    highValueAmenities: string[];
    paidUtilities: string[];
    geocode: Geocode;
}

export interface ListFilter {
    maxPrice: number;
    roomCounts: number[];
    isFavorite: boolean;
}

/* Root model, the rest are helper models */
export interface List {
    agentInfo: AgentInfo;
    records: Record[];
    showContactInfo: boolean;
    role: string;
    title: string;
    body: string;
}


