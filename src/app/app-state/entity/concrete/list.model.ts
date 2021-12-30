import { IGeocode } from "../abstract/i-geocode.model"
import { IAgentInfo, IFloorplan, IRecord, IListFilter, IList } from "../abstract/i-list.model"
import { Geocode } from "./geocode.model"

export class AgentInfo implements IAgentInfo {
    accountID: number = 0
    firstname: string = ''
    lastname: string = ''
    company: string = ''
    splashMessage: string = ''
    customHeader: string = ''
}

export class Floorplan implements IFloorplan {
    bedrooms: number = 0
    type: string = ''
    price: number = 0
}

export class Record implements IRecord {
    listID: number = 0
    order: number = 0
    propertyID: number = 0
    name: string = ''
    streetAddress: string = '';
    city: string = '';
    state: string = '';
    pets: boolean = false;
    washerDry: string = '';
    photo: string = '';
    favorite: boolean = false;
    highestSentCommissions: number = 0;
    onsiteManager?: any;
    management?: any;
    proximity: number = 0;
    section8: boolean = false;
    seniorHousing: boolean = false;
    studentHousting: boolean = false;
    floorplans: IFloorplan[] = []
    highValueAmenities: string[] = []
    paidUtilities: string[] = []
    geocode: IGeocode = new Geocode()
}

export class ListFilter implements IListFilter {
    maxPrice: number = 1995
    roomCounts: number[] = [0, 1, 2, 3]
    isFavorite: boolean = false
}


/* Root model, the rest are helper models */
export class List implements IList {
    agentInfo: IAgentInfo = new AgentInfo()
    records: IRecord[] = []
    showContactInfo: boolean = false
    role: string = ''
    title: string = ''
    body: string = ''
}


