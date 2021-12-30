/* http://json2ts.com/ used for JSON TO TS models */
/* Interface can be type-safe initiated like officeData: IOffice= <IOffice>{}; */

import { Geocode } from "./geocode.model";

export interface Parking {
    propertyID: number;
    reserved: boolean;
    reservedFeeMin: number;
    reservedFeeMax: number;
    covered: boolean;
    coveredFeeMin: number;
    coveredFeeMax: number;
    garage: boolean;
    garageFeeMin: number;
    garageFeeMax: number;
    detached: boolean;
    detachedFeeMin: number;
    detachedFeeMax: number;
    breezeway: boolean;
    attached: boolean;
}

export interface SchoolsInfo {
    propertyID: number;
    district: string;
    elementry: string;
    intermediate: string;
    middle: string;
    high: string;
}

export interface PetInfo {
    allowed: boolean;
    extraRent: number;
    limit: number;
    weight: number;
    breedRestriction: boolean;
    nonRefundableFee: number;
}

export interface Floorplan {
    floorplanID: number;
    bed: number;
    bath: number;
    sqft: number;
    deposit: number;
    photoUrl: string;
    washerDryer: string;
    price: number;
    priceMax: number;
    den: boolean;
    isAvailable: boolean;
    available: Date;
    comments: string;
}

/* Root model, the rest are helper models */
export interface Property {
    listID: number;
    propertyID: number;
    yearBuilt: number;
    yearRenovated: number;
    name: string;
    streetAddress: string;
    neighborhood: string;
    phone: string;
    city: string;
    adminFee: number;
    appFee: number;
    url: string;
    favorite: boolean;
    notes: string;
    specials: string;
    parking: Parking;
    schoolsInfo: SchoolsInfo;
    petInfo: PetInfo;
    paidUtilities: any[];
    floorplans: Floorplan[];
    highValueAmenities: string[];
    unitAmenities: string[];
    propertyAmenities: string[];
    geocode: Geocode;
    photos: string[];
    section8: boolean;
    studentHousting: boolean;
    seniorHousing: boolean;
    officeHours?: any;
    numUnits: number;
    email?: any;
    role: string;
    management?: any;
    managementOffices: any[];
    regionalName?: any;
    regionalPhone?: any;
    regionalEmail?: any;
    onsiteManager?: any;
}