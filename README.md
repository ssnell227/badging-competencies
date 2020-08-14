1. How do you protect secure information (API keys & user passwords mostly)

To protect an API key, I would put it in a .env file using the dotenv package and add the .env file to the gitignore, so that that variable would be locally stored

To protect a user password, I would use bcryptJS or another hash-generating package to create salt and a hash of the user's entered password and combine them as an alias for the user's password in my database, deleting the password from the session in the same function if I were using sessions.  Then, I can use the same package to take in a user's password on login, follow the same procedure to get what should be the same has as is stored in my database, and compare the two for authentication.

2. What is semantic HTML?  What are its advantages?

Semantic HTML is the use of descriptive tags and properties in HTML, like using the 'header' tag instead of a 'div' or the 'alt' tag for an image.  It improves internet accessability for blind people using screen-readers, it improves SEO because search algorithms will get more specific information, and it makes it easier for other people to read the code you've written.

3. Describe component based architecture.  What are its benefits?

Component based architecture separates websites/applications into distinct blocks.  It allows for the separation of concerns in individual files, preventing single modules from getting unreadably long.  It creates reusability, as many pieces of code can be reused throughout an application.  It allows for easier testing, as each component can have its own test, instead of writing one massive test for the whole application.

4. Describe dataflow in react.

Data moves one way: from parent to child through props.  If a child needs to change state or update a parent component, that parent component can pass a function to the child that allows it to update the parent.  If props-drilling becomes a problem due to too many nested components, an app-wide state manager like Redux or Context can be used to keep track of state that needs to be used throughout the application.

5. Describe the component lifecycle in react

For most use-cases, components have three primary stages at which to trigger code to function: when the component mounts, when it needs updating, and before it dismounts.  In class components, component lifecycle methods can be used to run functions or change state at these stages.  In functional components, the useEffect hook can be used to mimic the lifecycle methods.

6. Describe the virtual dom in react and its advantages.

The virtual dom is an abstraction of the dom that a react app renders to the website.  Instead immediately rendering changes to the dom, react builds a new version of the virtual dom including the changes and compares it to the real dom to see what individual changes need to be rendered.  This prevents the whole app from being rerendered when one thing changes--it allows changes to be made piecemeal.  This significantly improves performance in large-scale apps.

7. Why is it important to use proper status codes when writing endpoints?

Status codes are an essential part of a RESTful api, and allow the client and the server to speak the same language.  If a server sends out the same status code whether or not an error has occured, the client won't know the difference and has to look at the returned data to determine if there was a problem in the way it was trying to access the data.

8. How would you structure an endpoint url to follow RESTful principles

The URL should be a noun that describes the resource it points to; if the resource is a collection of a similar type of something, make it plural.

Resources nested within other resources should come after the parent resource in the URL.

9. How do you decide which data type to use in a database table?  Why is it important to use the correct datatypes?  What are some of the risks of choosing the wrong data type?

The data type should match the potential input from whatever client is going to interact with the database.  If the client is going to be putting exclusively integers into a field, then make the data type of that column specifically an integer.  This will ensure that when the data is being used, a minimum of formatting needs to be done on it before it's useful.