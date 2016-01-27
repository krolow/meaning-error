# meaning-error

[![Build Status](https://travis-ci.org/krolow/meaning-error.svg?branch=master)](https://travis-ci.org/krolow/meaning-error)
[![npm version](https://badge.fury.io/js/meaning-error.svg)](http://badge.fury.io/js/meaning-error)

It collects some common errors in a lib, to enable throw and catch those easily.

## Why?

While working with web services, we often need to make some checks, for example in one crud of posts:

- Check ```if``` post exists, ```else``` HTTP 404
- Check ```if``` post data is valid, ```else``` HTTP 400
- Check ```if``` user has authorization to access post, ```else``` HTTP 403
- Check ```if``` user is logged, ```else``` HTTP 401
- etc...

We are able to handle those errors directly by HTTP framework in use, for example [express](https://github.com/strongloop/express), but as good practices says, we should focus in our **business logic** instead of our [architecture](http://www.coderspeech.com/videos/talks/architecture-the-lost-years).

Having this as a **fact**, we should give some **meaning** for our errors, in our **business logic** layer, to enable our **HTTP Frameworks/TCP frameworks/etc..**, translate these errors for the propel protocol in use.

That's what **meaning-error** aim for. It creates a conjunct of standard errors to enable developers to ```throw``` those errors in their **business logic** given meaning for the operations, instead of, return *inconsistent objects* or *boolean values* to indicate the success or failure of operations, in the other hand it keep the ability to easily handle those errors, by pluging middlewares that *handle/catch* those errors and translate it for the protocol in use *(tcp/http/web socket/etc..)*.

## Usage

**List of errors to throw:**

- [BadRequestError](#BadRequestError)
- [ForbiddenError](#ForbiddenError)
- [InternalServerError](#InternalServerError)
- [MethodNotAllowedError](#MethodNotAllowedError)
- [NotFoundError](#NotFoundError)
- [UnauthorizationError](#UnauthorizationError)
- [MeaningError](#MeaningError)

#### <a name="BadRequestError"></a>BadRequestError

To use when data is not valid;

##### Options
- ```message```: Error message
- ```error```: Errors that you to forward for who going to consume BadRequestError

```js
throw new BadRequestError(
  'Data not Valid',
  [
    {
      field: 'name',
      message: 'Name can not be empty',
    },
    {
      field: 'date',
      message: 'Date field should be a valid date'
    }
  ]
);
```

**Accessing Error**
```js
try {
  throw new BadRequestError('Something weird', {fieldName: 'something', 'message': 'Bad Format'});
} catch (e) {
  e.getError(); //access the error object, the second argument with given errors...
}
```

#### <a name="ForbiddenError"></a>ForbiddenError

To use when *requester* does not have *rights* to access *resource*;

##### Options
- ```message```: Error message

```js
throw new ForbiddenError('You can not access this news');
```

#### <a name="InternalServerError"></a>InternalServerError

To use when some internal error happens;

##### Options
- ```message```: Error message

```js
throw new InternalServerError('Something weird happens');
```

#### <a name="MethodNotAllowedError"></a>MethodNotAllowedError

To use when *operation* does not support the *requested* action;

##### Options
- ```message```: Error message

```js
throw new MethodNotAllowedError('We only support PUT');
```

#### <a name="NotFoundError"></a>NotFoundError

To use when *resource* *requested* does not exists;

##### Options
- ```message```: Error message

```js
throw new NotFoundError('We could not found the article by this given id');
```

#### <a name="UnauthorizationError"></a>UnauthorizationError

To use when *requester* is not authenticated;

##### Options
- ```message```: Error message

```js
throw new UnauthorizationError('You must login to access');
```

#### <a name="MeaningError"></a>MeaningError

To use by inheritance for custom errors;

##### Options
- ```message```: Error message

```js
throw new MeaningError('New custom error');
```
## License

Licensed under <a href="http://krolow.mit-license.org/">The MIT License</a>
Redistributions of files must retain the above copyright notice.

## Author

Vinícius Krolow - krolow[at]gmail.com
