export default class ItemWithoutImageException extends Error {
    constructor(listType: string, message: string = `List of ${listType} has 1 or more items without image`){
        super(message);
    }
}