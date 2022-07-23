## [1.3.5] - 2022-07-23

- Removed `trackPropertySchema`. `track` can now accept any key-value object of `properties`

## [1.3.4] - 2022-07-23

- Handle network erros appropriately

## [1.3.3] - 2022-07-23

- Removed the IP address lookup. This is now being handled on the backend.
- Made `debug` property optional

## [1.3.2] - 2022-07-23

- Updated example
- Added `debug` property to config - Setting `debug` to `true` would output errors to the console.

## [1.3.1] - 2022-07-23

- Made `email` and `attributes` properties optional when identifying a user.
- Throw an error if neither `email` nor `phone_number` is provided when identifying a user.

## [1.3.0] - 2022-07-23

- Removed webpack bundler

## [1.2.2] - 2022-07-10

- Updated SDK example
- Made `device_id` as standard user property
- Added `identifier` as a required argument in the `track` method
- Fixed a bug with the `validate` function

## [1.2.1] - 2022-06-10

- Updated README.md
