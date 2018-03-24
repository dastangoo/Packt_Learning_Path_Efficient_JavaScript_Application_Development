const expect = require('chai').expect;
const alimentProvider = require('../../src/provider/aliment');

describe('aliment provider', () => {

    it('is a factory', () => {
        expect(alimentProvider).to.be.a.function;
        expect(alimentProvider()).to.be.an.object;
    });

    it('enables search', () => {
        let provider = alimentProvider();
        expect(provider.search).to.be.a.function;
        expect(provider.search('tacos')).to.be.an.object;
    });
});
