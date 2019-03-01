import * as interfaces from '../docstring_parts';
import { BaseFactory } from './base_factory'
import * as vscode from 'vscode';

export class MarkdownFactory extends BaseFactory {

    generateSummary(docstring: interfaces.DocstringParts){
        if (this._includeName) {
            this._snippet.appendText(`${docstring.name} `);
        }

        this._snippet.appendPlaceholder("[one-line summary]");
        this.appendNewLine()
    }

    generateDescription() {
        this.appendNewLine();
        this._snippet.appendPlaceholder("[multi-line description]");
        this.appendNewLine();
    }

    formatDecorators(decorators: interfaces.Decorator[]) {
        // No idea what that is
    }

    formatArguments(docstring: interfaces.DocstringParts) {
        this.appendText("\n# Arguments \n");
        for (let arg of docstring.args) {
            this.appendText(`* **${arg.var}** (*`);
            this.appendPlaceholder(`${arg.type}`);
            this.appendText("* ) -- ");
            this.appendPlaceholder("[description]");
            this.appendNewLine();
        }
    }

    formatKeywordArguments(docstring: interfaces.DocstringParts) {
        this.appendText("\n# Keyword Arguments \n");
        for (let kwarg of docstring.kwargs) {
            this.appendText(`* **${kwarg.var}`);
            this.appendPlaceholder(`${kwarg.type}`);
            this.appendText(` ,default = ${kwarg.default}`);
            this.appendText("");
            this.appendPlaceholder("[description]");
        }
    }

    formatRaises(raises: interfaces.Raises[]) {
        this.appendText("\n# Raises \n");
        for (let raise of raises) {
            this.appendText(`* **${raise.exception}** -- `);
            this.appendPlaceholder("[description]");
            this.appendNewLine()
        }
    }

    formatReturns(returns: interfaces.Returns) {
        this.appendText("\n# Returns \n");
        this.appendText("* **");
        this.appendPlaceholder("[name]");
        this.appendText("** (*");
        this.appendPlaceholder(`${returns.type}`);
        this.appendText("* ) -- ");
        this.appendPlaceholder("[description]");
        this.appendNewLine()
    }

}

