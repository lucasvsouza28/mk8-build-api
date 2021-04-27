import Stats from '@entities/stats';
import EmptyListException from "../../exceptions/EmptyListException";
import data from "./gliders-data";

export type GetGlidersServiceResponse = {
    items: Stats[];
}

export interface IGetGlidersService {
    execute: () => Promise<GetGlidersServiceResponse>;
}

export default class GetGlidersService implements IGetGlidersService {
    constructor(){}

    async execute(): Promise<GetGlidersServiceResponse> {
        const items: Stats[] = data;

        if (!items.length) throw new EmptyListException('glider');

        return {
            items
        } as GetGlidersServiceResponse;
    }
}