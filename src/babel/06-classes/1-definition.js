class Contract {
    constructor(guid) {
        this._guid = guid;
        this._works = [];
    }

    get guid() { return this._guid; }

    // set guid(guid) { this._guid = guid; }

    get works() { return this._works; }

    addWork(work) { this._works.push(work); }
}

const contract = new Contract('guid');
contract.guid = 'new guid'; // do nothing because setter is not defined
contract.addWork('work');
console.log(contract);
console.log(contract.guid);
console.log(contract.works);