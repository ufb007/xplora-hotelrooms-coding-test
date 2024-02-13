import {
    registerDecorator, 
    ValidationOptions, 
    ValidationArguments,
    ValidatorConstraint,
    ValidatorConstraintInterface
} from "class-validator";

@ValidatorConstraint({ name: 'isUUIDv4', async: false })
class IsUUIDv4Constraint implements ValidatorConstraintInterface {
  validate(value: string) {
    if (!/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89aAbB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/i.test(value)) {
      return false;
    }

    return true;
  }

  defaultMessage(args: ValidationArguments) {
    return 'Provided UUID is not a valid UUIDv4';
  }
}

export function IsUUIDv4(validationOptions?: ValidationOptions) {
    return function(object: Object, propertyName: string) {
        registerDecorator({
            name: 'isUUIDv4',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: IsUUIDv4Constraint
        });
    };
}
