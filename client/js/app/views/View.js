class View {

    constructor(element) {
        this._element = element;
    }

    //there isn't yet abstract classes to obligate classes who extends to implement this method
    template(model) {
        throw new Error('Should be implemented.')
        
    }

    update(model) {
        this._element.innerHTML = this.template(model);
    }
}