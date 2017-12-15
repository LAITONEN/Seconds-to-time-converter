# To test the app:
1. Clone the repository.
2. npm install
3. Add a console.log to src/spec/itShouldBeFunction file, where you call a method, imported on the top of the page, and pass any number of minutes there to get it converted to more human-understandable time unit format: console.log(method(6000000))
4. Run npm test and see your output

### Specification
- Write API which which converts number of seconds into user friendly string. Expect this code to be used in large web applications and main focus should be on maintanability.
- Here are some examples of input and output:
    * with input **284400** output would be **"3 days and 7 hours"**
    * with input **2700** output would be **"45 minutes"**
    * with input **47** output would be **"47 seconds"**
- Please ask if you need more specs.

### Quick start guide
- Clone this repository on your computer
- Install node dependencies using `npm install`
- Create new branch from master branch. Use your own name as branch name. For example `mattimehtonen` would be branch name for _Matti Mehtonen_.
- Checkout this branch.
- Run `npm start` command to start development
- Run `npm test` command to run unit tests
- Run `npm lint` to run linting
- Happy coding! :)