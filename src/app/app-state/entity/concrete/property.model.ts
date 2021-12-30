import { IGeocode } from "../abstract/i-geocode.model";
import { IFloorplan, IParking, IPetInfo, IProperty, ISchoolsInfo } from "../abstract/i-property.model";
import { Geocode } from "./geocode.model";


export class Parking implements IParking {
    propertyID: number = 0;
    reserved: boolean = false;
    reservedFeeMin: number = 0;
    reservedFeeMax: number = 0;
    covered: boolean = false;
    coveredFeeMin: number = 0;
    coveredFeeMax: number = 0;
    garage: boolean = false;
    garageFeeMin: number = 0;
    garageFeeMax: number = 0;
    detached: boolean = false;
    detachedFeeMin: number = 0;
    detachedFeeMax: number = 0;
    breezeway: boolean = false;
    attached: boolean = false;
}

export class SchoolsInfo implements ISchoolsInfo {
    propertyID: number = 0;
    district: string = '';
    elementry: string = '';
    intermediate: string = '';
    middle: string = '';
    high: string = '';
}

export class PetInfo implements IPetInfo {
    allowed: boolean = false;
    extraRent: number = 0;
    limit: number = 0;
    weight: number = 0;
    breedRestriction: boolean = false;
    nonRefundableFee: number = 0;
}

export class Floorplan implements IFloorplan {
    floorplanID: number = 0;
    bed: number = 0;
    bath: number = 0;
    sqft: number = 0;
    deposit: number = 0;
    photoUrl: string = '';
    washerDryer: string = '';
    price: number = 0;
    priceMax: number = 0;
    den: boolean = false;
    isAvailable: boolean = false;
    available: Date = new Date()
    comments: string = '';
}

/* Root model, the rest are helper models */
export class Property implements IProperty {
    listID: number = 0;
    propertyID: number = 0;
    yearBuilt: number = 0;
    yearRenovated: number = 0;
    name: string = '';
    streetAddress: string = '';
    neighborhood: string = '';
    phone: string = '';
    city: string = '';
    adminFee: number = 0;
    appFee: number = 0;
    url: string = '';
    favorite: boolean = false;
    notes: string = '';
    specials: string = '';
    parking: IParking = new Parking()
    schoolsInfo: ISchoolsInfo = new SchoolsInfo()
    petInfo: IPetInfo = new PetInfo()
    paidUtilities: any[] = []
    floorplans: IFloorplan[] = []
    highValueAmenities: string[] = []
    unitAmenities: string[] =[]
    propertyAmenities: string[] =[]
    geocode: IGeocode = new Geocode()
    photos: string[] = []
    section8: boolean = false;
    studentHousting: boolean = false;
    seniorHousing: boolean = false;
    officeHours?: any;
    numUnits: number = 0;
    email?: any;
    role: string = '';
    management?: any;
    managementOffices: any[] = []
    regionalName?: any;
    regionalPhone?: any;
    regionalEmail?: any;
    onsiteManager?: any;
}