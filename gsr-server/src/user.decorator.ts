
import { createParamDecorator } from '@nestjs/common';

// tslint:disable-next-line:max-line-length
// this decorator takes a property name as key and returns the associated value if it exists (or undefined if it doesn't exist, or if the user object has not been created)

export const User = createParamDecorator((data: string, req) => {
    return data ? req.user && req.user[data] : req.user;
});
