function serviceFactory() {
    const defaultCode = '';
    const entities = {};

    return {
        defaultCode,
        get,
        save
    };

    function get(guid) {
        return entities[guid];
    }

    function save(entity) {
        entities[entity.guid] = entity;
    }
}

const service = serviceFactory();
console.log('Default code =', service.defaultCode);
const guid = '123e4567-e89b-12d3-a456-426655440000';
service.save({ guid: guid });
console.log('Entity:', service.get(guid));