/**
 * Determines if object contains all params, the first argument of function must be the object
 * @param params array of string to validate
 */
import { BadRequestException } from '../shared/exceptions';

export function ValidateObject(params: string[]) {
    return (
        target: any,
        propertyKey: string,
        descriptor: TypedPropertyDescriptor<any>
    ): TypedPropertyDescriptor<any> => {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            if (!validate(args[0], params)) {
                throw new BadRequestException(`Params ''${params.join(' ')}'' must be send.`);
            }
            const result = originalMethod.apply(this, args);
            return result;
        };
        return descriptor;
    };
}

function validate(object: any, test: string[]): boolean {
    const keys = Object.keys(object);
    const isValid = test.every(key => keys.includes(key));
    return isValid;
}
