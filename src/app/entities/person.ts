export class Person {
    constructor(
        public cell: string = "",
        public dob: Dob | null = null,
        public email: string= "",
        public gender: string= "",
        public location: Location | null = null,
        public name: Name | null = null,
        public phone: string= "",
        public picture: Picture | null = null,
        public registered: Registered | null = null,
    ) {

    }

    static formJson(json: Attributes<Person>): Person {
        return new Person(
            json.cell,
            json.dob,
            json.email,
            json.gender,
            json.location,
            json.name,
            json.phone,
            json.picture,
            json.registered,
        )
    }

}

export interface Dob {
    date: string,
    age: number,
}

export interface Location {
    city: string,
    coordinates: Coordinates,
    country: string,
    postcode: number,
    state: string,
    street: Street,
    timezone: Timezone,
}

export interface Coordinates {
    latitude: string,
    longitude: string,
}

export interface Street {
    number: number,
    name: string,
}

export interface Timezone {
    offset: string,
    description: string,
}

export interface Name {
    title: string, 
    first: string, 
    last: string,
}

export interface Picture {
    large: string,
    medium: string,
    thumbnail: string,
}

export interface Registered {
    date: string,
    age: number,
}

export type Attributes<T> = Partial<Omit<T, { [K in keyof T]-?: T[K] extends Function ? K : never }[keyof T]>>