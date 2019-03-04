# To use new compiled Templates: 
- install njpwerner.autodocstring-0.2.3
- unzip 'njpwerner.autodocstring-0.2.3.zip' at %USERPROFILE%\.vscode\extensions\
- Open Command Palette (ctrl + shift + P), Type and Run: 'Reload Window'

# Usage of autodocstring: 
- write function
- write start of docstring ("""") and press Enter 
- Use Tab to tab through placeholders

## To edit and compile the Docstring Template:
- git clone https://github.com/wmehling/autoDocstring.git 
- edit markdown.ts in src/docstring_factories
- run "tsc" command in autodocstring folder (you need typescript compiler e.g. npm install -g typescript)

# to test/use freshly compiled extension:
- replace out/src to in %USERPROFILE%\.vscode\extensions\njpwerner.autodocstring-0.2.3
- if you also want to edit settings etc. -> also replace .json in ..../njpwerner.autodocstring-0.2.3/
- Open Command Palette (ctrl + shift + P), Type and Run: 'Reload Window'