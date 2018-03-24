const expect = require('chai').expect;
const alimentProvider = require('../../src/provider/aliment');

describe('aliment provider', () => {

    it('search for tacos', () => {
        let provider = alimentProvider();
        expect(provider.search).to.be.a.function;
        expect(provider.search('tacos')).to.be.an.object;
    });
});
