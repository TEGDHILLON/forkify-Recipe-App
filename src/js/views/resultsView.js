import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class ResultsView extends View {
  constructor() {
    super();
    this._parentElement = document.querySelector('.results');
    this._errorMessage = 'No recipes found for your query! Please try again ;)';
    this._message = '';
  }
  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
