let tweets = [];
const btn = document.getElementById("tweet");

function tweeting(e) {
  e.preventDefault();
  let tweet = {};
  let tweetText = document.getElementById("exampleFormControlTextarea1").value;
  tweet.tweet = tweetText;
  tweets.unshift(tweet);
  display(tweets);
}

function display(tweets) {
  let newTweet = tweets
    .map(function(tweet) {
      //callback function
      return `
        <div class="form-group">
              <hr />
              <div class="column">
                <div class="fb-start">
                    <img
                    id="avatar"
                    src="https://instagram.fyyz1-1.fna.fbcdn.net/vp/e75c368a6e9624ff872ba315fac50e72/5DF17A92/t51.2885-19/11410505_833412053410486_294445979_a.jpg?_nc_ht=instagram.fyyz1-1.fna.fbcdn.net"
                    alt=""
                    />
                    <p class="h6 pt-1">Katie H.</p>
                    <a  href="#" class="username pl-2">@katieatgeorgian</a>
                </div>
                <div>
                    <p class="tweetText">${tweet.tweet} </p>
                </div>
                <div class="fb tweetText">
                    <section>
                        <div id="inserts" class="btn-group mr-2">
                            <button
                            type="button"
                            class="btn btn-secondary mdi mdi-comment-outline"
                            aria-label="Reply"
                            ></button>
                            <button
                            type="button"
                            class="btn btn-secondary mdi mdi-twitter-retweet"
                            aria-label="Retweet"
                            ></button>
                            <button
                            type="button"
                            class="btn btn-secondary mdi mdi-heart-outline"
                            aria-label="Like"
                            style=""
                            ></button>
                            <button
                            type="button"
                            class="btn btn-secondary mdi mdi-upload"
                            aria-label="Share tweet"
                            ></button>
                        </div>
                    </section>
                </div>
              </div>
              
              
            </div>`;
    })
    .join("");

  const main = document.querySelector("main");
  main.innerHTML = newTweet;
}
btn.addEventListener("click", tweeting);
