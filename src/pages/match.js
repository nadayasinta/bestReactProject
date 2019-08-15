import React from "react";

class ZodiacMatch extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <form>
            <div class="col-3">
              <label for="zodiac1">Your Zodiac</label>
              <select class="browser-default custom-select">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class=" col-3">
              <label for="zodiac1">Your Zodiac</label>

              <select class="browser-default custom-select">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <button type="submit" class="btn btn-primary col-3">
              Check
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ZodiacMatch;
