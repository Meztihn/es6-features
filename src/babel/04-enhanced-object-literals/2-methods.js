const service = {
    entities: {},
    get(guid) {
        return this.entities[guid];
    },
    save(entity) {
        this.entities[entity.guid] = entity;
    }
};

const guid = 'guid';
service.save({ guid: guid });
console.log(service.get(guid));