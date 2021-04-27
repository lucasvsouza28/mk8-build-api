export default class EmptyBodiesListException extends Error {
    constructor(
        listType: string,
        message: string = `The list of type '${listType}' is empty`){
        super(message);
    }
}