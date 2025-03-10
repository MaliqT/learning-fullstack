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