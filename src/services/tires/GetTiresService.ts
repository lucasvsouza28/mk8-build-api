import Stats from '@entities/stats';
import EmptyListException from "../../exceptions/EmptyListException";
import data from "./tires-data";

export type GetTiresServiceResponse = {
    items: Stats[];
}

export interface IGetTiresService {
    execute: () => Promise<GetTiresServiceResponse>;
}

export default class GetTiresService implements IGetTiresService {
    constructor(){}

    async execute(): Promise<GetTiresServiceResponse> {
        const items: Stats[] = data;

        if (!items.length) throw new EmptyListException('tire');

        return {
            items
        } as GetTiresServiceResponse;
    }
}