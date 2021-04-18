# README
This repository was created to generate a technical test to ChatFood

This README file will help you once talking about 'how to execute this project' and run all the existing tests on it.

First of all, you must download the 2 existing folders on its repository:
  cypress;
  node_modules.zip (zipped because it has a lot a files, which is ok);

Then, the other files, are basically the same which exists inside the folders you've just downloaded, but for instance, let's do this way:

Once Cypress is OPENED, refer to: 

>> Test #1 ("chatfood_spec.js"):

1. The test will validate an action to visit to a specific website;
2. An option will be selected right at the top of the screen;
2.1. Right after clicking at the existing option, a new selection will be made;
3. The test will validate its URL that has changed, once we've selected a specific value at the main screen;
4. It will be validated that a specific text contains on its page, then it will be selected (clicked);
5. Once again, an URL validation will be made, just to make sure we are at the correct page after selecting a specific link on the last page;
6. A few validations will be made, as of:
6.1. Series Cast header validation;
6.2. Seasons text validation;
6.3. Social text validation;
6.4. Reviews section validation;
6.5. Discussion section validation.


>> Test #2 ("chatfood_test2_spec.js"):

1. The test will validate an action to visit to a specific website;
2. An option will be selected right at the top of the screen;
2.1. Right after clicking at the existing option, a new selection will be made;
3. The test will validate its URL that has changed, once we've selected a specific value at the main screen;
4. Filters field is selected so more options could definitely be chosen;
5. A specific GENRE, as of Filter, is selected;
6. An action to click on Search button is made;
7. A wait script is defined so its prevent the browser to clicking on a not expected option before the page is totally loaded;
8. A click is made at the first MOVIE presented to the screen;
9. A few fields are validated inside the specific selected movie page, as of:
9.1. Videos existing for the particular movie;
9.2. The number of existing videos is validated;
9.3. The TOTAL number of Videos is validated;
9.4. The action to check ALL VIDEOS is made;
10. Validation of comparing the quantity of videos presented on the current screen is the same as of the last screen;
10.1. Validates each of the existing fields related to possibilities of Existing Videos for the specific Movie selected
