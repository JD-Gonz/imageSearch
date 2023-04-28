# imageSearch

A simple image search abstraction layer that allows a user to search for images and view the most recent searches.

## Functional Specifications

* You can get the image URLs, alt text and page urls for a set of images relating to a given search string.
* You can paginate through the responses by adding a ?q=10 parameter to the URL.
* You can get a list of the most recently submitted search strings.

## Installation and Setup

To clone this repository, run the following command:

```
git clone https://github.com/JD-Gonz/imageSearch
```

Then, navigate to the project directory and install the dependencies using npm:

```
cd imageSearch
npm install
```

## Usage

To run the project locally, use the following command:

```
npm start
```

This will start the server at `http://localhost:8080`.

## API Endpoints

* `/search/:query` - search for images based on the `query` parameter
* `/search/:query?q=10` - paginate through the search results
* `/latest-searches` - get the most recently submitted search strings

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.