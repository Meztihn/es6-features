class Entity {
    constructor(guid) {
        this.guid = guid;
    }
}

class Contract extends Entity {
    constructor(guid, status) {
        super(guid);
        this.status = status;
    }
}

const contract = new Contract('guid', 'PROJECT');
console.log(contract);