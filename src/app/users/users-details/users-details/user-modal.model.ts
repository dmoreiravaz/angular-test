export interface UserModalModel {
    name: string;
    phone: string;
    website: string;
    companyName: string;
    latitude: number;
    longitude: number;
}

export interface UserDetailsModel {
    userDetails: UserModalModel;
}