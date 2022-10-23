import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import _ from 'underscore';
import axios from 'axios';
import Characteristic from './Characteristic.jsx';

const NewReview = ({ data }) => {
  const [firstStar, setFirstStar] = useState('⭐');
  const [secondStar, setSecondStar] = useState('⭐');
  const [thirdStar, setThirdStar] = useState('⭐');
  const [fourthStar, setFourthStar] = useState('⭐');
  const [fifthStar, setFifthStar] = useState('⭐');
  const [rating, setRating] = useState(null);
  const [recommended, setRecommended] = useState(true);
  const [characteristics, setCharacteristics] = useState({});
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [remainingChars, setRemainingChars] = useState('Minimum required characters left: 50');
  const [images, setImages] = useState([]);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [hasErrors, setHasErrors] = useState(false);

  const ratings = {
    1: '- Poor',
    2: '- Fair',
    3: '- Average',
    4: '- Good',
    5: '- Great',
    null: '',
  };

  const qualities = {
    Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too large', 'A size too large'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly Wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly comfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly loose', 'Runs loose'],
  };

  const oneStar = () => {
    setFirstStar('🌟');
    setSecondStar('⭐');
    setThirdStar('⭐');
    setFourthStar('⭐');
    setFifthStar('⭐');
    setRating(1);
  };

  const twoStar = () => {
    setFirstStar('🌟');
    setSecondStar('🌟');
    setThirdStar('⭐');
    setFourthStar('⭐');
    setFifthStar('⭐');
    setRating(2);
  };

  const threeStar = () => {
    setFirstStar('🌟');
    setSecondStar('🌟');
    setThirdStar('🌟');
    setFourthStar('⭐');
    setFifthStar('⭐');
    setRating(3);
  };

  const fourStar = () => {
    setFirstStar('🌟');
    setSecondStar('🌟');
    setThirdStar('🌟');
    setFourthStar('🌟');
    setFifthStar('⭐');
    setRating(4);
  };

  const fiveStar = () => {
    setFirstStar('🌟');
    setSecondStar('🌟');
    setThirdStar('🌟');
    setFourthStar('🌟');
    setFifthStar('🌟');
    setRating(5);
  };

  const handleRecommended = () => {
    setRecommended(true);
  };

  const handleNotRecommended = () => {
    setRecommended(false);
  };

  const handleSummary = (event) => {
    setSummary(event.target.value);
  };

  const handleBody = (event) => {
    setBody(event.target.value);
    setRemainingChars(event.target.value.length < 50 ? `Minimum required characters left: ${50 - event.target.value.length}` : 'Minimum Reached');
  };

  const handleAddImage = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const invalidEmail = () => {
    const addressParts = email.split('@');
    if (addressParts.length !== 2) return true;
    const prefix = addressParts[0];
    const domain = addressParts[1];
    let validCharacters = 'qwertyuiopasdfghjklzxcvbnm1234567890-_.';
    let semiValidCharacters = '-_.';

    // prefixes
    if (semiValidCharacters.includes(prefix[0])
      || semiValidCharacters.includes(prefix[prefix.length - 1])) return true;

    for (let i = 0; i < prefix.length; i += 1) {
      if (!validCharacters.includes(prefix[i])) {
        return true;
      }

      if (semiValidCharacters.includes(prefix[i]) && semiValidCharacters.includes(prefix[i + 1])) {
        return true;
      }
    }

    // domains

    const domainParts = domain.split('.');
    if (domainParts.length < 2) return true;
    const suffix = domainParts[domainParts.length - 1];
    validCharacters = 'qwertyuiopasdfghjklzxcvbnm1234567890-.';
    semiValidCharacters = '-.';

    if (suffix.length < 2) return true;

    for (let i = 0; i < domain.length; i += 1) {
      if (!validCharacters.includes(domain[i])) {
        return true;
      }

      if (semiValidCharacters.includes(domain[i]) && semiValidCharacters.includes(domain[i + 1])) {
        return true;
      }
    }

    return false;
  };

  const checkForErrors = () => {
    if (!rating) {
      setHasErrors(true);
      document.getElementById('empty-review').style.display = 'block';
    }

    if (_.size(characteristics) !== _.size(data.characteristics)) {
      setHasErrors(true);
      document.getElementById('empty-characteristics').style.display = 'block';
    }

    if (!body.length) {
      setHasErrors(true);
      document.getElementById('empty-body').style.display = 'block';
    } else if (body.length < 50) {
      setHasErrors(true);
      document.getElementById('short-body').style.display = 'block';
    }

    if (!nickname.length) {
      setHasErrors(true);
      document.getElementById('empty-nickname').style.display = 'block';
    }

    if (!email.length) {
      setHasErrors(true);
      document.getElementById('empty-email').style.display = 'block';
    } else if (invalidEmail()) {
      setHasErrors(true);
      document.getElementById('invalid-email').style.display = 'block';
    }
  };

  const handleSubmit = () => {
    setHasErrors(false);
    const errors = document.getElementsByClassName('error');
    _.each(errors, (error) => {
      error.style.display = 'none';
    });
    Promise(checkForErrors)
      .then(() => {
        console.log(hasErrors);
      });
  };

  return (
    <div id="new-review">
      <form>
        <div>
          Overall rating (mandatory)
        </div>

        <div>
          <button type="button" onClick={oneStar}>
            {firstStar}
          </button>
          <button type="button" onClick={twoStar}>
            {secondStar}
          </button>
          <button type="button" onClick={threeStar}>
            {thirdStar}
          </button>
          <button type="button" onClick={fourStar}>
            {fourthStar}
          </button>
          <button type="button" onClick={fiveStar}>
            {fifthStar}
          </button>
          {ratings[rating]}
        </div>

        <div className="error" id="empty-review">
          <small>This field is required</small>
        </div>

        <div>
          Do you recommend this product? (mandatory)
          <fieldset>
            <div>
              <input type="radio" value="yes" id="recommended" name="rec" onChange={handleRecommended} defaultChecked />
              <label htmlFor="recommended">Yes</label>
            </div>

            <div>
              <input type="radio" value="no" id="not-recommended" name="rec" onChange={handleNotRecommended} />
              <label htmlFor="not-recommended">No</label>
            </div>
          </fieldset>
        </div>

        <div>
          Characteristics (mandatory)
          <fieldset>
            {_.map(data.characteristics, (char, i) => (
              <Characteristic
                key={char.id}
                i={i}
                characteristics={characteristics}
                setCharacteristics={setCharacteristics}
                qualities={qualities}
              />
            ))}
          </fieldset>
        </div>

        <div className="error" id="empty-characteristics">
          <small>This field is required</small>
        </div>

        <div>
          Review Summary
        </div>

        <div>
          <input type="text" value={summary} onChange={handleSummary} maxLength="60" placeholder="Example: Best purchase ever!" size="60" />
        </div>

        <div>
          Review body (mandatory)
        </div>

        <div>
          <textarea value={body} onChange={handleBody} minLength="50" maxLength="1000" placeholder="Why did you like the product or not?" rows="10" cols="60" />
        </div>

        <div>
          {remainingChars}
        </div>

        <div className="error" id="empty-body">
          <small>This field is required</small>
        </div>
        <div className="error" id="short-body">
          <small>Body must be at least 50 characters long</small>
        </div>

        <div>
          Upload your photos
        </div>

        <ImageUploading
          multiple
          value={images}
          maxNumber="5"
          onChange={handleAddImage}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
          }) => (
            <div>
              <button
                type="button"
                onClick={onImageUpload}
              >
                Upload images
              </button>
              &nbsp;
              <button type="button" onClick={onImageRemoveAll}>Remove all images</button>
              {imageList.map((image, index) => (
                <div key={index}>
                  <img src={image.data_url} alt="" width="100" />
                  <div>
                    <button type="button" onClick={() => onImageUpdate(index)}>Update</button>
                    <button type="button" onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>

        <div>
          What is your nickname (mandatory)
        </div>

        <div>
          <input type="text" value={nickname} onChange={handleNicknameChange} maxLength="60" placeholder="Example: jackson11!" size="60" />
        </div>

        <small>For privacy reasons, do not use your full name or email address</small>

        <div className="error" id="empty-nickname">
          <small>This field is required</small>
        </div>

        <div>
          Your email (mandatory)
        </div>

        <div>
          <input type="text" value={email} onChange={handleEmailChange} maxLength="60" placeholder="Example: jackson11@email.com" size="60" />
        </div>

        <div className="error" id="empty-email">
          <small>This field is required</small>
        </div>
        <div className="error" id="invalid-email">
          <small>Invalid email</small>
        </div>

        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default NewReview;
