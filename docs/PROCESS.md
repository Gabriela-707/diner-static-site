# Process Document

## 1. What I Built and Why
For this exercise, I wanted to expand my website by adding form validation to the existing form on my contact page. With the help of Claude, I was able to implement this feature.

## 2. Process and Methods
This site had a simple HTML and CSS build, so in order to create the form and to implement the form validation, I knew I would have to create a JS file with it. Keeping the logic within the JS file instead of within the HTML as <script> would also make it easier to find, edit, and test in this case. 
After creating the JS file, adding the field validators were next, making sure that each text feild was being filled out correctly. To test this, I wrote both good and bad values within the field to see if it would come back as true or false properly. Error messages were also added along with this to display invalid fields, and would disappear when the field was valid.

Adding the real-time validation on blur was the next step. For this step, I had Claude code to explain why we use blur for the validation. After understanding the response, I fully understood how simple and easy the blur works and how it gives users a chance to finish typing before they are shown an error message. 

For the success state, the "Message Sent" text was displayed. I noticed that when the form was submitted, the message was being displayed at the top, which can be hidden if the user had scrolled all the way down the page. With this, I asked Claude to center the message vertically with the form area, and scrollIntoView({ behavior: 'smooth', block: 'center' }) was used instead. I asked another follow up question asking why this method. It was explained to me that it brings the element to the vertical center of the viewport regardless of where on the page the user is and that it required no layout chnages what so ever.

The .css was also updated to style the success and error states, which were visually reviewed to ensure they were cohesive and logical.

## 3. What was changed from the original
Overall, not too much was changed. One new file was added, the form-validation.js file that stores all the logic. The contact.html file had some minor changes with some added field ids that the JS file can target, <span> elements with error messages, and a <script> tag. Finally, the CSS had some added styles to match the error messages, invalid/valid fields, and the form success state/message. 

