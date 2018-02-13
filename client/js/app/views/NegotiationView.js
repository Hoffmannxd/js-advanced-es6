class NegotiationView {

    constructor(elementId){
        this._element = elementId;
    }

    _template(model){
        return `
                <table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>DATA</th>
                            <th>QUANTIDADE</th>
                            <th>VALOR</th>
                            <th>VOLUME</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${model.negotiations.map(n => 
                            `
                            <tr>
                                <td>${DateHelper.dateToString(n.data)}</td>
                                <td>${n.quantidade}</td>
                                <td>${n.valor}</td>
                                <td>${n.volume}</td>


                            </tr>

                            `
                        ).join('')}
                    </tbody>
                    <tfoot>
                        <td colspan="3"></td>
                        <td>
                        ${model.negotiations.reduce((total,n) => total + n.volume, 0.0)}
                        </td> 

                    </tfoot>
                </table>
                    `;
            }

    update(model){
        //convert template into DOM element
        this._element.innerHTML = this._template(model);
    }


}

/*
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        
        <tbody>
        </tbody>
        
        <tfoot>
        </tfoot>
*/

/*
OO solution for total volume

                        <td>${
                            (function(){
                                let total = 0;
                                model.negotiations.forEach(n => total += n.volume);
                                return total;

                            })() IIFE, to give just 1 instruct 
                        }</td>
*/ 

