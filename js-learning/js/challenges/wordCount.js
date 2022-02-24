var tweet = prompt("compose your tweet:");
let tweetCount = tweet.length;
let tweetUnder140 = tweet.slice(0,141);
alert("Your tweet: " + tweetUnder140)
alert("You have written " + tweetCount + " characters, you have " + (140-tweetCount) + " characters left.");