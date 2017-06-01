
import { ObjectID } from 'mongodb';
import { ObjectIDException } from '../shared/exceptions';

const ObjectMetadataKey = Symbol('ObjectId');

export function ObjectId(target: object, propertyKey: string | symbol, parameterIndex: number) {
    const existingRequiredParameters: number[] =
        Reflect.getOwnMetadata(ObjectMetadataKey, target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata(ObjectMetadataKey, existingRequiredParameters, target, propertyKey);
}

export function ValidateParams(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<any>) {
    const method = descriptor.value;
    descriptor.value = function() {
        const objectIdParameters: number[] =
            Reflect.getOwnMetadata(ObjectMetadataKey, target, propertyName);

        if (objectIdParameters) {
            for (const parameterIndex of objectIdParameters) {
                arguments[parameterIndex] = getObjectID(arguments[parameterIndex]);
            }
        }

        return method.apply(this, arguments);
 };
}

function getObjectID(id: string | ObjectID) {
    if (!ObjectID.isValid(id)) {
        throw new ObjectIDException(id);
    }

    return new ObjectID(id);
}
