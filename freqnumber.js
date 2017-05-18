const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

jasmine.getEnv().clearReporters();               // remove default reporter logs
jasmine.getEnv().addReporter(new SpecReporter({  // add jasmine-spec-reporter
    spec: {
        displayPending: true
    }
}));


describe("input string got words and it's num", function() {
    let str = "it was the age of wisdom it was the age of foolishness it is";
    let strList = "it 3 was 2 the 2 age 2 of 2 wisdom 1 foolishness 1 is 1";
    it("input a got a 1", function() {
        expect(count("a")).toEqual("a 1");
    });

    it("input a b got a 1 b 1", function() {
        expect(count("a b")).toEqual("a 1 b 1");
    });

    it("input a b a got a 2 b 1", function() {
        expect(count("a b a")).toEqual("a 2 b 1");
    });

    it("input it was the got it 3 was 2", function() {
        expect(count(str)).toEqual(strList);
    });
});    

function count(str){
    str = str.split(/\s+/);
    wordslist = {};
    let words = "";
    str.forEach(function(item){
        if( item in wordslist )
            wordslist[item] += 1;
        else{
            wordslist[item] = 1;
        }
    });
    delete wordslist[""];
    let sdic = Object.keys(wordslist).sort(function(a,b){return wordslist[b] - wordslist[a]});
    for(ki in sdic){
        words += " "+ sdic[ki] + " " + wordslist[sdic[ki]];
    }
    return words.substr(1);
}