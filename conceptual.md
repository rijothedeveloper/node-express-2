### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
JWT stands for Json Web token

- What is the signature portion of the JWT?  What does it do?
It will sign the payload using a secret key

- If a JWT is intercepted, can the attacker see what's inside the payload?
yes

- How can you implement authentication with a JWT?  Describe how it works at a high level.
In jwt the payload is signed with a secret key so when you receive the payload you can check whther its altered or not using the same secret key

- Compare and contrast unit, integration and end-to-end tests.
integration test tests the working between different modules but end to end test tests from user point of view

- What is a mock? What are some things you would mock?
mock is like we are mocking the functionality of a code which we cant control or for thepurpose to isolate some piece of code, API are usually mocked

- What is continuous integration?
continuous integration is the process where we can continously merge the code and test it

- What is an environment variable and what are they used for?
Environvariables are used to set some values representing that purticular environment in which the code runs

- What is TDD? What are some benefits and drawbacks?
TDD stands for test driven development. In tdd test are written before code which helps to write a code which is easily testable. But it may take more time initially

- What is the value of using JSONSchema for validation?
It is easier to validate json without too many if statements or complex logic

- What are some ways to decide which code to test?
We need to test all the important part of the code base

- What does `RETURNING` do in SQL? When would you use it?
returning will return the values we specified. Some statements like insert into won't return useful data so that we can use returning to make sure the query works in a way we need

- What are some differences between Web Sockets and HTTP?
sockets are bi directional and maintain states while http is uni directional and do not maintain any states

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  I prefer flask because I like python which is good for complex calculations.
