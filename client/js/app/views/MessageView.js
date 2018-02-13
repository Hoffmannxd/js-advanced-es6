class MessageView extends View {
    constructor(element) {
        //throw to base class the argument
        super(element);
    }

    template(model){
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>`: `<p></p>`;
    }

}