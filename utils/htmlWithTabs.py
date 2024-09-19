import os, sys
import webbrowser
import pandas as pd
from bs4 import BeautifulSoup


style_html = """
    	.menu {
            display: flex;
            background-color: #f0f0f0;
        }

        .menu a {
            padding: 14px 18px;
            text-decoration: none;
            color: #333;
            text-align: center;
            display: flex;
            align-items: center;
			font-size: 18px;
        }

        .menu img {
            margin-right: 2px;
            margin-top: 0;
            margin-bottom: 0px;
        }

        .menu a:hover {
            background-color: #f5f5f5;
        }
		section {
			visibility: hidden;
			display: none;
		}
		#overview {
			visibility: visible;
			display: block;
		}
        """

script_html = """
        <script>
            function toggleVisibility(sectionId) {
                // Hide all sections
                document.querySelectorAll('section').forEach(section => {
                    section.style.visibility = 'hidden';
                    section.style.display = 'none';
                });
                
                // Show the selected section
                const selectedSection = document.getElementById(sectionId);
                selectedSection.style.visibility = 'visible';
                selectedSection.style.display = 'block';
            }
        
            function hideNonExistentButtons() {
                    const sections = ['overview', 'installation', 'vignette', 'resources', 'citation'];
        
                    sections.forEach(sectionId => {
                        const section = document.getElementById(sectionId);
                        const button = document.getElementById(`${sectionId}-btn`);
                        
                        if (!section && button) {
                            button.style.display = 'none'; // Hide the button if the section doesn't exist
                        }
                    });
                }
        
            hideNonExistentButtons();
        </script>
        """


def createMenu (html_content) :
    h2_texts = [h2.get_text() for h2 in html_content.find_all('h2')]
    html_output = '<div class="menu">\n'
    for text in h2_texts:
        id_text = text.lower().replace(" ", "-")  # Convert the text to an ID-friendly format
        html_output += f'\t<a href="#{id_text}" id="{id_text}-btn" onclick="toggleVisibility(\'{id_text}\')">{text}</a>\n'
    html_output += '</div>'

    first_h2 = html_content.find('h2')
    first_h2.insert_before(BeautifulSoup(html_output, 'html.parser'))
    
    return html_content.prettify()


def addSectionH2(html_content) : 
    h2_elements = html_content.find_all('h2')
    
    for h2 in h2_elements :
        new_section = html_content.new_tag('section', id=h2.get_text().lower().strip())
        h2.insert_before(new_section)
        new_section.append(h2.extract())
        sibling = new_section.find_next_sibling()
        
        while sibling and sibling.name != 'h2':
            next_sibling = sibling.find_next_sibling()
            new_section.append(sibling.extract())
            sibling = next_sibling
    
    return html_content.prettify()


def addHtmlStyles (html_content) :
    parts = html_content.split('</body>')
    new_html_content = f"{parts[0]}{script_html}\n</body>{parts[1]}"

    return BeautifulSoup(new_html_content)
    
    # parts = new_html_content.split('</style>')
    # return BeautifulSoup(f'{parts[0]}{parts[1]}{style_html}\n</style>{parts[2]}')

def main (path_html) :
    html_content = open(path_html, 'r', encoding='utf-8').read()
    
    html_content = BeautifulSoup(html_content, 'html.parser')
    html_content = createMenu(html_content)
    html_content = addSectionH2(BeautifulSoup(html_content, 'html.parser'))
    html_content = addHtmlStyles(html_content)

    open(path_html, 'w', encoding='utf-8').write(html_content)
