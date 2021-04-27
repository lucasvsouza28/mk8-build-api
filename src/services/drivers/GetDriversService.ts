import Stats from '@entities/stats';
import EmptyListException from "../../exceptions/EmptyListException";
import data from "./drivers-data";

export type GetDriversServiceResponse = {
    items: Stats[];
}

export interface IGetDriversService {
    execute: () => Promise<GetDriversServiceResponse>;
}

export default class GetDriversService implements IGetDriversService {
    constructor(){}

    async execute(): Promise<GetDriversServiceResponse> {
        const items: Stats[] = data;

        if (!items.length) throw new EmptyListException('driver');

        return {
            items
        } as GetDriversServiceResponse;
    }
}