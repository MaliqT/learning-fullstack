# Full Stack Development
This repo will consist of my learning about full stack development. This will be in an agile setting using version control with GitHub. Changes, issues, fixes will all be posted here when working on this project.
This project will follow the steps along roadmap.sh fullstack component. 

## 1. Learning HTML
The first step is learning HTMl/CSS. This is to display the contents of a webpage to the user. Only context and style of the webpage will be handled throughout HTMl and CSS. Thus far, the
start of an html file has the document type (!DOCTYPE html), the language of the page (html lang="en") and the character encoding (meta charset="UTF-8"). From here, the web page
will have a head that contains meta information about the document as well as holding scripts. This is not seen on the web page. Afterwards, a body is created that contains all visible content and html elements such as div, 
section, article, header, footer, etc. All enclosed between <>.

#### Text Basics:
I learned the basics of writing text within an HTML file. We have a paragraph such as &lt;p&gt; that is block level, meaning that it creates an entire block section of code that can be written inside of it. We can then change the way the text is displayed using inline level code by making it italicized or bold using em for emphasizing words or phrases, and strong which will bold words or phrases. We can abbreviate words and then show the abbreviation for those words when the user hovers over the corresponding abbreviation. Furthermore, we can change indentation manually and break lines in a paragraph using &lt;br&gt;

#### Lists:
Then we move on to lists. So far there's ordered lists, unordered lists, and description lists. Ordered and unordered lists are block level containers that use &lt;li&gt; when listing items and sorts them or bullet points them. Description lists are a bit more technical in that it has description lists as the main container and a description term that displays what will be listed and then a description definition that describes that item.

#### Links:
Links don't just jump from web page to web page but can also be utilized using images and even on the same web page. In my example, I have it setup where if you click the links, it designates the user to my GitHub profile, my Linkedin profile, and a tutorial web page about HTMl. Not only that, I have a link that references specific sections on the same web page currently active. This is done by specifying a section of html code, giving that section an ID, and then using that ID to refer a link to that section. For now, I just have a link that refers to the top of the web page.

#### Images:
Displaying images is pretty versatile in HTMl and quite easy to use. Using the inline element &lt;img&gt;, we can give the source of the image (relative path), an alternative text, and many more attributes. For my example, I had an image at 4000x6000 pixels which is way too big to be displayed fully. So I manually set the width and height to 400x600 respectively. I even set it as a figure and created a figcaption so that any writing that pertains to that image will be set and displayed right below it and any HTML5 compiler or so will understand that the image is supposed to have that description.

#### Semantics:
Learned about what semantics are and how they are used to organize the structure of our html code files not just visually but programming wise as well. Before, programmers would use div and span to divide up parts of html sections, but now we can specifically state a part of the code for assistive tools. So far for this project, I've used semantics like header to declare which part of the html code is the header. The main element for the main body portion of the web page. The article element that specifies which part has it's own topic that can be broken up into smaller parts called sections. Then I used an aside element that displays a dropdown arrow feature where the user can click and more text or images or information will pop up below which is also done using the details element and summary element. Lastly, I used nav which is used for major blocks of navigation links.

#### Tables:
Here I implemented a simple table that outlines what my daily routine is like on a basic level. I did have to incorporate some CSS level code just to get the look of the table correctly displayed on the webpage for the user. Just a simple topic utilizing the table element as well as structuring the table with table headers, table rows, and table data. Very straight forward topic.

#### Forms & Inputs:
For this section, I implemented forms that collect user input and send it to a server using either GET method or POST method, however POST is the more secure way of sending sensitive information. The forms that are coded in are a regular user form where the user can type information into a text box. The next one is a number type form where the user can select an increment or decrement of numbers using up and down arrows on the text bar. The third is a drop down option where you can select certain options. This can be changed as well where the user can select multiple options. Then we have a radio type form where it's bullet options. Next is checkboxes for the user to select more than one option. Lastly is the text box area where the user can type out a message and whatnot. This can all be selected/typed out and be associated with the name attribute so when the data gets sent to a server, it can be accessed by the backend using the associated name. As a bonus, a submit button, a post button, and a reset button is created at the end of the forms to send the data out to the server. In this case, we have the data going to https://httpbin.org to see how the data is being sent.



## Learning CSS
In this section, I'll be following along a YouTube video to understand how to code and link CSS code to HTML to give the appearance of the HTML web page a better look. CSS follows a top down type execution, meaning that any changes and code will execute from the top of the CSS file all the way down where changes for the most recent will be applied. Example: If we applied CSS code for the body element in the beginning of the file and then we change it again at the end of the file, the changes at the end of the file will be applied. All code in regards to these topics will be in the style.css file under CSS folder.

#### Selectors:
Starting selectors, we can change the appearance of how they look on the web page. This pertains to HTML elements. So we can change the body, p, main, article, section, and so on. Any of the HTML elements that we can use in the HTML files are the selectors that we can change. Then we have ID's that we can change as well using # just before the ID name, like #firstName. All of these selectors are then followed by {} where all the CSS code will go.

#### Colors:
Colors may be one of the components that will be used the most. We can change the background color of the web page, we can change the color of the fonts, or even colors of other individual components. Changing the color schemes follows 3 different color formats. Color names, at least VS Code detects color names and changes accordingly, then we have RGB format (255, 255, 255) range, lastly we have hex format that still follows the layout of RGB (FF00FF). As a rule of thumb, font and background must be a balance between high contrast colors and low contrast colors. If the background is low contrast, then font should be high contrast and vice versa making the page readable. 

#### Units and Sizes:
We have absolute size units and then we have relative size units. The absolute size units do not change in relative to anything else. They will always be the same. These units consist of centimeters (cm), millimeters (mm), Quater-Millimeters (Q), inches (in), picas (pc), points (pt), and pixels (px). The most commonly used value is px which will be used in this project. 
The relative units are em which is relative to font size of parent, ex for x-height of element's font, ch the width of the glyph "0", rem which is relative to the font size of the root element, lh for line height of the element, vw and vh which is 1% of viewport's width or height, vmin and vmax which is 1% of viewport's smaller dimension or larger dimension.