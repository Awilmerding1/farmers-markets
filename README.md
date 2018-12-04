# NYC Farmers Markets and Grocery Lists


This application provides a platform on which users can search for Farmers Markets in New York City and create grocery lists. Users can filter markets by zip code and/or days of the week that they are open.  A user can create grocery lists for multiple markets at once. Users can view all items in one comprehensive list, organized by day, or organized by market.

All information about the NYC Farmers Markets is provided by the NYC Department of Health and Mental Hygiene (DOHMH). Please visit https://data.cityofnewyork.us/dataset/DOHMH-Farmers-Markets-and-Food-Boxes/8vwk-6iz2 for more information.

Code License: https://opensource.org/licenses/MIT

## Installation

You can install this application by running `git clone https://github.com/Awilmerding1/farmers-markets.git` .

## Usage

After cloning the repository, enter the `farmers-market` directory on your computer.

Run `bundle install`.

Then run `rake db:migrate` and `rake db:seed`.

Then enter the `client` folder (by entering `cd client` in the command line) and run `npm install`.

Return to the `farmers-market` directory (by entering `cd ..` in the command line) and run `rake start`


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/awilmerding1/book-review-app-with-js. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the Destinations project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/awilmerding1/book-review-app-with-js/blob/master/CODE_OF_CONDUCT.md).
