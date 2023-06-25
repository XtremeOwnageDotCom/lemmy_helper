// both posts arrays should be sorted by published timestamp
export function matchPosts(posts0, posts1) {
    let results = {
        resultsA: [],
        unfoundA: []
    };

    let onJ = -1;
    for (let i = 0; i < posts0.length; i++) {
        let foundMatch = false;
        // ToDo: start j value on onJ instead of 0?
        for (let j = 0; j < posts1.length; j++) {
            if (posts0[i].post.published == posts1[j].post.published) {
                // timestamps match, now title?
                if (posts0[i].post.name === posts1[j].post.name) {
                    results.resultsA.push(i + ":" + j + ":same");
                    foundMatch = true;
                    if (j != onJ + 1) {
                        results.resultsA.push(i + ":" + j + ":SKIP?" + onJ + "?");
                        results.unfoundA.push(posts1[onJ + 1]);
                    }
                    onJ = j;
                    // abort j loop
                    break;
                } else {
                    results.resultsA.push(i + ":" + j + ":title");
                }
            } else {
                // resultsA.push(i + ":time");
            }
        }
        if (!foundMatch) {
            results.resultsA.push(i + "unfound");
            results.unfoundA.push(posts0[i]);
        }
    }

    return results;
}
